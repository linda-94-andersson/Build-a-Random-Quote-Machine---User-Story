import axios from "axios";
import { ActionType } from "../constans/action-type";

const options = {
    method: 'GET',
    url: 'https://quotes15.p.rapidapi.com/quotes/random/',
    params: { language_code: 'en' },
    headers: {
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
        'X-RapidAPI-Key': 'db83666c77msh8ecec0133f7340fp13c5afjsn8acd31e791d9'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});

export const getQuote = () => async (dispatch) => {
    const res = await axios.get('https://quotes15.p.rapidapi.com/quotes/random/');
    dispatch({
        type: ActionType.GET_QUOTE,
        quote: res.data,
    });
    console.log(res.data, " res getQuote");
}