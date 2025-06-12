import * as NEWS from "./actionType";

const initialState = {
    loading: false,
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type){
        case NEWS.LATEST_NEWS: {
            return {
                ...state,
                latestNews: action.payload
            }
        }
        case NEWS.LATEST_NEWS_REQUEST: {
            return {
                ...state,
                
            }
        }
        default:
            return state;
    }
}