import * as newsActionTypes from './actionType';

export const fetchNews = () => {
    return {
        type: newsActionTypes.LATEST_NEWS_REQUEST,
        payload: {data: []}
    }
}

export const fetchNewSuccess = data => {
    return {
        type: newsActionTypes.LATEST_NEWS_SUCCESS,
        payload: {data: data}
    }
}

export const fetchNewsFail = error => {
    return {
        type: newsActionTypes.LATEST_NEWS_FAILURE,
        payload: {error: error}
    }
}