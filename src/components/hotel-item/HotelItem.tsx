import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { Hotel } from "../../models/hotel"
import { StarRating } from "../star-rating/StarRating"
import { FavoriteLogo, HotelItemWrapper } from "./style"

export const HotelItem = ({options}: {options: Hotel}) => {
    const {currentHotels} = useTypedSelector(state => state.hotelsReducer);
    const {changeIsFavoriteOnCurrentHotel, addFavoriteHotels, removeFavoriteHotels} = useActions();

    const favoriteHandleClicked = (e: any) => {
        const id = e.target.getAttribute('data-id');

        const filteredHotels = currentHotels.filter(currenHotel => {
            return currenHotel.id == id
        });
        
        const hotel = filteredHotels[0];

        if (!hotel.isFavorite) {
            changeIsFavoriteOnCurrentHotel(hotel.id);
            addFavoriteHotels(hotel);

            return;
        }

        changeIsFavoriteOnCurrentHotel(hotel.id);
        removeFavoriteHotels(hotel);
    }

    return (
        <HotelItemWrapper>
            <div className='hotel-logo'>
                <div className='hotel-logo__home-header'></div>
            </div>
            <div className='hotel-info'>
                <p className='hotel-info__name'>
                    {options.name}
                </p>
                <p className='hotel-info__date'>
                    {options.date.day} {options.date.month}, {options.date.year} <span className='dash'>—</span> 
                    {options.days == 1 && <span>{options.days} день</span>}
                    {options.days >= 2 && options.days <= 4 && <span>{options.days} дня</span>}
                    {options.days >= 5 && <span>{options.days} дней</span>}
                </p>
                <div className='hotel-info__stars'>
                    <StarRating count={options.rating} to={5} />
                </div>
            </div>

            <div className='hotel-controls'>
                <FavoriteLogo isActive={options.isFavorite} data-id={options.id} onClick={favoriteHandleClicked} />
                <p>
                    Price: <span>{options.price} &#8381; </span>
                </p>
            </div>
        </HotelItemWrapper>
    )
}