import {ADD_HOTEL_TO_FAVORITES, DEL_HOTEL_TO_FAVORITES} from "../actions/actions";

const initialState = {
    favoritesHotels: [],
}

export const addToFavoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HOTEL_TO_FAVORITES:
            return {...state, favoritesHotels: [...state.favoritesHotels, action.payload]}
        case DEL_HOTEL_TO_FAVORITES:
            return {favoritesHotels: state.favoritesHotels.filter(hotel => hotel.hotelId !== action.payload)}
        default:
            return state;
    }
}

export const addFavoriteHotel = (payload) => ({type: ADD_HOTEL_TO_FAVORITES, payload})
export const delFavoriteHotel = (payload) => ({type: DEL_HOTEL_TO_FAVORITES, payload})