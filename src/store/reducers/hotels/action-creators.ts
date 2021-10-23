import { Hotel } from '../../../models/hotel';
import { AddFavoriteHotelAction, ChangeIsFavoriteOnCurrentHotelAction, HotelsActionEnum, HotelsSortTypes, RemoveFavoriteHotelAction, SetCurrentHotelsAction, SetFavoriteHotelsAction, SetLocationAction, SortFavoriteHotelsByPriceAction, SortFavoriteHotelsByRatingAction } from './types';

export const HotelsActionCreators = {
    setCurrentHotels: (hotels: Hotel[]): SetCurrentHotelsAction => {
        return {
            type: HotelsActionEnum.SET_CURRENT_HOTELS,
            payload: hotels
        }
    },
    setFavoriteHotels: (hotels: Hotel[]): SetFavoriteHotelsAction => {
        return {
            type: HotelsActionEnum.SET_FAVORITE_HOTELS,
            payload: hotels
        }
    },
    addFavoriteHotels: (hotel: Hotel): AddFavoriteHotelAction => {
        return {
            type: HotelsActionEnum.ADD_FAVORITE_HOTEL,
            payload: hotel
        }
    },
    removeFavoriteHotels: (hotel: Hotel): RemoveFavoriteHotelAction => {
        return {
            type: HotelsActionEnum.REMOVE_FAVORITE_HOTEL,
            payload: hotel
        }
    },
    changeIsFavoriteOnCurrentHotel: (hotelId: string): ChangeIsFavoriteOnCurrentHotelAction => {
        return {
            type: HotelsActionEnum.CHANGE_IS_FAVORITE_ON_CURRENT_HOTEL,
            payload: hotelId
        }
    },
    sortFavotiteHotelsByRating: (type: HotelsSortTypes): SortFavoriteHotelsByRatingAction => {
        return {
            type: HotelsActionEnum.SORT_FAVORITE_HOTELS_BY_RATING,
            payload: type
        }
    },
    sortFavotiteHotelsByPrice: (type: HotelsSortTypes): SortFavoriteHotelsByPriceAction => {
        return {
            type: HotelsActionEnum.SORT_FAVORITE_HOTELS_BY_PRICE,
            payload: type
        }
    },
    setLocation: (location: string): SetLocationAction => {
        return {
            type: HotelsActionEnum.SET_LOCATION,
            payload: location
        }
    },
}