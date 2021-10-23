import { HotelItem } from "../hotel-item/HotelItem";
import { HotelsSlider } from "../hotels-slider/HotelsSlider";
import CustomScroll from 'react-custom-scroll';
import { ArrivalDate, FavoritesInfo, HotelsListTitleWrapper, HotelsListWrapper, RightArrow, SearchedHotel, SearchedHotelsList, SearchLocationText, SearchLocationWrapper, SliderWrapper } from "./style";
import moment from "moment";
import 'moment/locale/ru';
import { useEffect } from "react";
import HotelService from "../../api/HotelsService";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Hotel } from "../../models/hotel";
import { HotelItemType } from "../hotel-item/types";

export const HotelsList = () => {
    moment.locale('ru');
    const todayDateRu = moment().format('D MMMM YYYY');

    const todayDate = moment().format('YYYY-MM-D');
    const tomorrowDate = moment().add(1, 'days').format('YYYY-MM-D');

    const {currentHotels, location, favoriteHotels} = useTypedSelector(state => state.hotelsReducer);
    const {setCurrentHotels, setLocation} = useActions();

    useEffect(() => {
        (async () => {
            const response = await HotelService.getHotels('Moscow', todayDate, tomorrowDate);
            const responseHotels = response.data;
            const hotels: Hotel[] = [] as Hotel[];

            responseHotels.forEach(responseHotel => {
                moment.locale('en');
                const day = moment().format('D');
                const month = moment().format('MMMM');
                const year = moment().format('YYYY');

                hotels.push({
                    id: responseHotel.hotelId,
                    name: responseHotel.hotelName,
                    date: {
                        day: day,
                        month: month,
                        year: year,
                    },
                    days: 1,
                    rating: responseHotel.stars,
                    price: responseHotel.priceAvg,
                    isFavorite: false,
                });
            });

            setCurrentHotels(hotels);
            setLocation('Москва');
        })();
    }, []);

    return (
        <HotelsListWrapper>
            <HotelsListTitleWrapper>
                <SearchLocationWrapper>
                    <SearchLocationText>
                        Отели
                    </SearchLocationText>
                    <RightArrow />
                    <SearchLocationText>
                        {location}
                    </SearchLocationText>
                </SearchLocationWrapper>
                <ArrivalDate>
                    {todayDateRu}
                </ArrivalDate>
            </HotelsListTitleWrapper>
            <SliderWrapper>
                <HotelsSlider />
            </SliderWrapper>
            <FavoritesInfo>
                Добавлено в Избранное:
                { favoriteHotels.length < 1 && <span><b>{favoriteHotels.length}</b>отелей</span> }
                { favoriteHotels.length == 1 && <span><b>{favoriteHotels.length}</b>отель</span> }
                { favoriteHotels.length > 1 && favoriteHotels.length < 5 && <span><b>{favoriteHotels.length}</b>отеля</span> }
                { favoriteHotels.length > 4 && <span><b>{favoriteHotels.length}</b>отелей</span> }
            </FavoritesInfo>
            <CustomScroll allowOuterScroll={true}>
                <SearchedHotelsList>
                    <SearchedHotel>
                        {
                            currentHotels.map((currentHotel, key) => {
                                return (
                                    <HotelItem options={currentHotel} key={key} />
                                );
                            })
                        }
                    </SearchedHotel>
                </SearchedHotelsList>
            </CustomScroll>
        </HotelsListWrapper>
    )
}