import { ActionType } from "../constans/action-type";

const quoteReducer = (state = { quote: [] }, action) => {
    switch (action.type) {
        case ActionType.GET_QUOTE:
            return { ...state, quote: action.quote };
        default:
            return state;
    }
}

export default quoteReducer;