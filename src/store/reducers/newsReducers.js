import {TOP_HEADLINES} from '../actions/newsAction';

const initialState = {
    top_headlines: [],
};

export default (state = initialState, action) => {
    switch(action.type) {
        case TOP_HEADLINES:
            return {
                ...state,
                top_headlines: action.top_headlines
            };
        default: 
            return state;
    }
};