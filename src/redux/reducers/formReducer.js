import {nowDate} from "../../utils";
import {GET_FORM_DATA} from "../actions/actions";

const initialState = {
    location: 'Москва',
    date: nowDate,
    days: '1'
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FORM_DATA:
            return {...state, [action.payload.target.name]: action.payload.target.value}
        default:
            return state;
    }
}

export const getFromData = (payload) => ({type: GET_FORM_DATA, payload})