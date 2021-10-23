import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Hotel } from "../../models/hotel"
import { StarRating } from "../star-rating/StarRating"
import { FavoriteLogo, FavoriteItemWrapper } from "./style"

export const FavoriteItem = ({options}: {options: Hotel}) => {
    const {currentHotels} = useTypedSelector(state => state.hotelsReducer);
    const {changeIsFavoriteOnCurrentHotel, addFavoriteHotels, removeFavoriteHotels} = useActions();

    const favoriteHandleClicked = (e: any) => {
        const id = e.target.getAttribute('data-id');

        const filteredHotels = currentHotels.filter(currenHotel => {
            return currenHotel.id == id
        });
        
        const hotel = filteredHotels[0];

        changeIsFavoriteOnCurrentHotel(hotel.id);
        removeFavoriteHotels(hotel);
    }

    return (
        <FavoriteItemWrapper>
            <div className='hotel-title'>
                <p className='hotel-title__name'>
                    {options.name}
                </p>
                <div data-id={options.id} onClick={favoriteHandleClicked}>
                    <FavoriteLogo data-id={options.id} />
                </div>
            </div>

            <div className='hotel-date'>
                {options.date.day} {options.date.month}, {options.date.year} <span className='dash'>—</span> 
                {options.days == 1 && <span>{options.days} день</span>}
                {options.days >= 2 && options.days <= 4 && <span>{options.days} дня</span>}
                {options.days >= 5 && <span>{options.days} дней</span>}
            </div>

            <div className='hotel-info'>
                <div className='hotel-controls__stars'>
                    <StarRating count={options.rating} to={5} />
                </div>
                <p className='hotel-info__price'>
                    Price: <span>{options.price} &#8381; </span>
                </p>
            </div>
        </FavoriteItemWrapper>
    )
}