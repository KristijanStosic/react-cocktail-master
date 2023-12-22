import { combineReducers } from "@reduxjs/toolkit";
import reducer from "./slice.js";

const rootReducer = combineReducers({
    cocktail: reducer
});

export default rootReducer;