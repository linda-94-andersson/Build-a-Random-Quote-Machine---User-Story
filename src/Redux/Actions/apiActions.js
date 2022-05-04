import axios from "axios";
import { ActionType } from "../constans/action-type";

export const getQuote = () => async (dispatch) => {
    const res = await axios.request({
        method: 'GET',
        url: import.meta.env.VITE_API_URL,
        headers: {
            'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        },
    });
    dispatch({
        type: ActionType.GET_QUOTE,
        quote: res.data,
    });
    console.log(res.data, " res getQuote");
}
