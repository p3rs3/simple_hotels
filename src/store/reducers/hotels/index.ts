import { Hotel } from "../../../models/hotel";
import { HotelsAction, HotelsActionEnum, HotelsSortTypes, HotelsState } from "./types";

const initialState: HotelsState = {
    currentHotels: [] as Hotel[],
    favoriteHotels: [] as Hotel[],
    location: '',
}

export default function hotelsReducer(state = initialState, action: HotelsAction): HotelsState {
    switch (action.type) {
        case HotelsActionEnum.SET_CURRENT_HOTELS:
            return {...state, currentHotels: action.payload}
        case HotelsActionEnum.SET_FAVORITE_HOTELS:
            return {...state, favoriteHotels: action.payload}
        case HotelsActionEnum.ADD_FAVORITE_HOTEL: 
            return {...state, favoriteHotels: [...state.favoriteHotels, action.payload]}
        case HotelsActionEnum.REMOVE_FAVORITE_HOTEL: 
            return {...state, favoriteHotels: state.favoriteHotels.filter(hotel => hotel.id != action.payload.id)}
        case HotelsActionEnum.CHANGE_IS_FAVORITE_ON_CURRENT_HOTEL: {
            const updatedHotels = state.currentHotels.map(currentHotel => {
                if (currentHotel.id == action.payload) {
                    return {...currentHotel, isFavorite: !currentHotel.isFavorite}
                }

                return currentHotel;
            });

            return {...state, currentHotels: updatedHotels}
        }
        case HotelsActionEnum.SORT_FAVORITE_HOTELS_BY_RATING: 
            return {...state, favoriteHotels: state.favoriteHotels.sort((a: Hotel, b: Hotel) => {
                if (action.payload === HotelsSortTypes.DOWN) {
                    return a.rating - b.rating;
                }

                return b.rating - a.rating;
            })
        }
        case HotelsActionEnum.SORT_FAVORITE_HOTELS_BY_PRICE: 
            return {...state, favoriteHotels: state.favoriteHotels.sort((a: Hotel, b: Hotel) => {
                if (action.payload === HotelsSortTypes.DOWN) {
                    return a.price - b.price;
                }

                return b.price - a.price;
            })
        }
        case HotelsActionEnum.SET_LOCATION:
            return {...state, location: action.payload}
        default:
            return state;
    }
}