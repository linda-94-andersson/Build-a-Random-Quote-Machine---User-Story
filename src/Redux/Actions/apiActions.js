import axios from "axios";
import { ActionType } from "../constans/action-type";

const options = {
    method: 'GET',
    url: 'https://quotes15.p.rapidapi.com/quotes/random/',
    params: { language_code: 'en' },
    headers: {
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.VITE_SOME_KEY,
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});

console.log(process.env.VITE_SOME_KEY)

export const getQuote = () => async (dispatch) => {
    const res = await axios.get('https://quotes15.p.rapidapi.com/quotes/random/');
    dispatch({
        type: ActionType.GET_QUOTE,
        quote: res.data,
    });
    console.log(res.data, " res getQuote");
}
