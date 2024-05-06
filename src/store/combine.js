import { combineReducers } from "redux";
import languageReducer from "./reducer";
import FavReducer from "./cartReducer";
import moviesReducer from "./moviesReducer";

export default combineReducers({
    language:languageReducer,
    addToCart:FavReducer,
    movies:moviesReducer
})