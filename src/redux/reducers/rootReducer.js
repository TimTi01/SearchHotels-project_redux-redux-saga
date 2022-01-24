import {combineReducers} from "redux";
import {dataReducer} from "./dataReducer";
import {formReducer} from "./formReducer";
import {addToFavoritesReducer} from "./addToFavoritesReducer";

export const rootReducer = combineReducers({
    data: dataReducer,
    form: formReducer,
    addToFavorites: addToFavoritesReducer,
})

