import {LOAD_DATA, LOAD_DATA_SUCCESS} from "../actions/actions";
import {nowDate} from "../../utils";

const initialState = {
    data: [],
    location: 'Москва',
    date: nowDate,
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            const {location, date, days} = action.payload

            return {
                ...state,
                loading: true,
                location,
                date,
                days,
            }
        case LOAD_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        default:
            return state
    }
}

export const loadData = (payload) => ({type: LOAD_DATA, payload})
