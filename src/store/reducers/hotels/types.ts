import { Hotel } from "../../../models/hotel";

export interface HotelsState {
    location: string;
    currentHotels: Hotel[];
    favoriteHotels: Hotel[];
}

export enum HotelsActionEnum {
    SET_CURRENT_HOTELS = 'SET_CURRENT_HOTELS',
    SET_FAVORITE_HOTELS = 'SET_FAVORITE_HOTELS',
    ADD_FAVORITE_HOTEL = 'ADD_FAVORITE_HOTEL',
    CHANGE_IS_FAVORITE_ON_CURRENT_HOTEL = 'CHANGE_IS_FAVORITE_ON_CURRENT_HOTEL',
    REMOVE_FAVORITE_HOTEL = 'REMOVE_FAVORITE_HOTEL',
    SET_LOCATION = 'SET_LOCATION',
    SORT_FAVORITE_HOTELS_BY_RATING = 'SORT_FAVORITE_HOTELS_BY_RATING',
    SORT_FAVORITE_HOTELS_BY_PRICE = 'SORT_FAVORITE_HOTELS_BY_PRICE',
}

export enum HotelsSortTypes {
    UP = 'UP',
    DOWN = 'DOWN',
}

export interface SetCurrentHotelsAction {
    type: HotelsActionEnum.SET_CURRENT_HOTELS;
    payload: Hotel[];
}

export interface SetFavoriteHotelsAction {
    type: HotelsActionEnum.SET_FAVORITE_HOTELS;
    payload: Hotel[];
}

export interface SetLocationAction {
    type: HotelsActionEnum.SET_LOCATION;
    payload: string;
}

export interface AddFavoriteHotelAction {
    type: HotelsActionEnum.ADD_FAVORITE_HOTEL;
    payload: Hotel;
}

export interface RemoveFavoriteHotelAction {
    type: HotelsActionEnum.REMOVE_FAVORITE_HOTEL;
    payload: Hotel;
}

export interface ChangeIsFavoriteOnCurrentHotelAction {
    type: HotelsActionEnum.CHANGE_IS_FAVORITE_ON_CURRENT_HOTEL;
    payload: string;
}

export interface SortFavoriteHotelsByRatingAction {
    type: HotelsActionEnum.SORT_FAVORITE_HOTELS_BY_RATING;
    payload: string;
}

export interface SortFavoriteHotelsByPriceAction {
    type: HotelsActionEnum.SORT_FAVORITE_HOTELS_BY_PRICE;
    payload: string;
}

export type HotelsAction = 
SetCurrentHotelsAction |
SetFavoriteHotelsAction |
SetLocationAction |
AddFavoriteHotelAction |
RemoveFavoriteHotelAction |
ChangeIsFavoriteOnCurrentHotelAction |
SortFavoriteHotelsByRatingAction |
SortFavoriteHotelsByPriceAction