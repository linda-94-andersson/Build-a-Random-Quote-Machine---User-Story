import axios from 'axios';
import { ActionType } from '../constans/action-type';

export const getQuote =
	(controller = null) =>
	async (dispatch) => {
		const options = {
			method: 'GET',
			url: import.meta.env.VITE_API_URL,
			headers: {
				'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
				'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
			},
		};

		if (controller instanceof AbortController) {
			options.signal = controller.signal;
		}

		try {
			const res = await axios.request(options);
			dispatch({
				type: ActionType.GET_QUOTE,
				quote: res.data,
			});
			console.log(res.data, ' res getQuote');
		} catch (e) {
			if (e.code === 'ERR_CANCELED') return;
			console.error(e.message || e);
		}
	};
