import { combineReducers } from "@reduxjs/toolkit";
import quoteReducer from "./quoteReducer";

const reducers = combineReducers({
    getQuote: quoteReducer,
});

export default reducers;