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

export const fetchNewsArticles = () => {
    return {
        type: newsActionTypes.ARTICLES_REQUEST,
        payload: {data: []}
    }
}

export const fetchNewsArticlesSuccess = data => {
    return {
        type: newsActionTypes.ARTICLES_SUCCESS,
        payload: {data: data}
    }
}

export const fetchNewsArticlesFailure = error => {
    return {
        type: newsActionTypes.ARTICLES_FAILURE,
        payload: {error: error}
    }
}

export const fetchGalleries = () => {
    return {
        type: newsActionTypes.GALLERIES_REQUEST,
        payload: {data: []}
    }
}

export const fetchGalleriesSuccess = data => {
    return {
        type: newsActionTypes.GALLERIES_SUCCESS,
        payload: {data: data}
    }
}

export const fetchGalleriesFailure = error => {
    return {
        type: newsActionTypes.GALLERIES_FAILURE,
        payload: {error: error}
    }
}