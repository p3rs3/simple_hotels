import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { HotelsSortTypes } from "../../store/reducers/hotels/types";
import { FavoriteItem } from "../favorite-item/FavoriteItem";
import { SornTypeEnum } from "../sort-button/enums";
import { SortButton } from "../sort-button/SortButton";
import { FavoritesList, FavoritesSorting, FavoritesTitle, FavoritesWrapper, PriceSorting, RatingSorting } from "./style"
import CustomScroll from 'react-custom-scroll';

export const Favorites = () => {
    const [ratingSort, setRatingSort] = useState(SornTypeEnum.INACTIVE);
    const [priceSort, setPriceSort] = useState(SornTypeEnum.INACTIVE);

    const {favoriteHotels} = useTypedSelector(state => state.hotelsReducer);
    const {sortFavotiteHotelsByRating, sortFavotiteHotelsByPrice} = useActions();

    const ratingClickedHandler = () => {
        setPriceSort(SornTypeEnum.INACTIVE);

        switch (ratingSort) {
            case SornTypeEnum.INACTIVE: {
                sortFavotiteHotelsByRating(HotelsSortTypes.UP);
                setRatingSort(SornTypeEnum.UP)
                break;
            }
            case SornTypeEnum.DOWN: {
                sortFavotiteHotelsByRating(HotelsSortTypes.UP);
                setRatingSort(SornTypeEnum.UP);
                break;
            }
            case SornTypeEnum.UP: {
                sortFavotiteHotelsByRating(HotelsSortTypes.DOWN);
                setRatingSort(SornTypeEnum.DOWN);
                break;
            }
        }
    };

    const priceClickedHandler = () => {
        setRatingSort(SornTypeEnum.INACTIVE);

        switch (priceSort) {
            case SornTypeEnum.INACTIVE: {
                sortFavotiteHotelsByPrice(HotelsSortTypes.UP);
                setPriceSort(SornTypeEnum.UP);
                break;
            }
            case SornTypeEnum.DOWN: {
                sortFavotiteHotelsByPrice(HotelsSortTypes.UP);
                setPriceSort(SornTypeEnum.UP);
            }
                break;
            case SornTypeEnum.UP: {
                sortFavotiteHotelsByPrice(HotelsSortTypes.DOWN);
                setPriceSort(SornTypeEnum.DOWN);
            }
                break;
        }
    };

    return (
        <FavoritesWrapper>
            <FavoritesTitle>
                Избранное
            </FavoritesTitle>
            <FavoritesSorting>
                <RatingSorting onClick={ratingClickedHandler}>
                    <SortButton name='Рейтинг' sort={ratingSort} />
                </RatingSorting>
                <PriceSorting onClick={priceClickedHandler}>
                    <SortButton name='Цена' sort={priceSort}/>
                </PriceSorting>
            </FavoritesSorting>
            <CustomScroll allowOuterScroll={true}>
                <FavoritesList>
                    {
                        favoriteHotels.map((favoriteHotel, key) => {
                            return (
                                <FavoriteItem options={favoriteHotel} key={key}/>
                            );
                        })
                    }
                </FavoritesList>
            </CustomScroll>
        </FavoritesWrapper>
    )
}