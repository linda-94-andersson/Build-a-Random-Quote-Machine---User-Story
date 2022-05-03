import axios from "axios";
import { ActionType } from "../constans/action-type";

var mykey = config.VITE_SOME_KEY;

export const getQuote = () => async (dispatch) => {
    const res = await axios.get('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', {
        headers: {
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
            'X-RapidAPI-Key': mykey,
        }
    });
    dispatch({
        type: ActionType.GET_QUOTE,
        quote: res.data,
    });
    console.log(res.data, " res getQuote");
}

console.log(mykey + " key")
