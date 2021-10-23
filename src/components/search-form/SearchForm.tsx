import { SearchFormError, SearchFormWrapper, SearchFromButton, SearchFromInput, SearchFromInputWrapper, SearchFromLabel } from "./style";
import { useForm, SubmitHandler} from 'react-hook-form';
import { SearchFormType } from "./types";
import { useEffect, useState } from "react";
import moment from "moment";
import HotelService from "../../api/HotelsService";
import { Hotel } from "../../models/hotel";
import { useActions } from "../../hooks/useActions";

export const SearchForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [daysCount, setDaysCount] = useState('');
    const [dateError, setDateError] = useState(false);
    const {setCurrentHotels, setLocation} = useActions();
    const todayDate = moment().format('YYYY-MM-D');

    const formSubmit:  SubmitHandler<SearchFormType> = async (e: any) => {
        const checkOut = moment(e.date).add(e.days, 'days').format('YYYY-MM-D');

        const response = await HotelService.getHotels(e.location, e.date, checkOut);
        const responseHotels = response.data;
        const hotels: Hotel[] = [] as Hotel[];

        responseHotels.forEach(responseHotel => {
            moment.locale('en');
            const day = moment(e.date).format('D');
            const month = moment(e.date).format('MMMM');
            const year = moment(e.date).format('YYYY');

            hotels.push({
                id: responseHotel.hotelId,
                name: responseHotel.hotelName,
                date: {
                    day: day,
                    month: month,
                    year: year,
                },
                days: e.days,
                rating: responseHotel.stars,
                price: responseHotel.priceAvg,
                isFavorite: false,
            });
        });

        setCurrentHotels(hotels);
        setLocation(e.location);
    }

    const formDateChangeHandler = (e: any) => {
        const isBefore = (moment(e.target.value).isAfter(todayDate));

        if (!isBefore) {
            setDateError(true);

            return;
        }

        setDateError(false);
    }

    return (
        <SearchFormWrapper onSubmit={handleSubmit(formSubmit)}>
            <SearchFromInputWrapper>
                <SearchFromLabel>
                    Локация
                </SearchFromLabel>
                <SearchFromInput 
                    {
                        ...register(
                            'location',
                            {
                                required: true,
                            }
                        )
                    }
                />
            </SearchFromInputWrapper>

            <SearchFromInputWrapper>
                <SearchFromLabel>
                    Дата заселения
                </SearchFromLabel>
                <SearchFromInput 
                    type="date"
                    className="date-input"
                    {
                        ...register(
                            'date',
                            {
                                required: true,
                            }
                        )
                    }
                    min={todayDate}
                    onChange={formDateChangeHandler}
                />
                {
                    dateError && 
                    <SearchFormError>
                        Некорректная дата
                    </SearchFormError>
                }
            </SearchFromInputWrapper>

            <SearchFromInputWrapper>
                <SearchFromLabel>
                    Количество дней
                </SearchFromLabel>
                <SearchFromInput 
                    {
                        ...register(
                            'days',
                            {
                                required: true,
                            }
                        )
                    }
                    onChange={(e) => {
                        const isNumberMatch = e.target.value.match(/^[0-9]+$/);

                        if (isNumberMatch) {
                            setDaysCount(isNumberMatch[0]);
                        }

                        if (e.target.value === '') {
                            setDaysCount('');
                        }
                    }}
                    value={daysCount}
                />
            </SearchFromInputWrapper>

            <SearchFromButton type="submit">
                Найти
            </SearchFromButton>
        </SearchFormWrapper>
    )
}