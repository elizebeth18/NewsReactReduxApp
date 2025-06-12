import { data } from "react-router-dom";
import * as NEWS from "./actionType";

const initialState = {
    loading: false,
    error: '',
    galleryData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NEWS.LATEST_NEWS: {
            return {
                ...state,
                latestNews: action.payload
            }
        }
        case NEWS.LATEST_NEWS_REQUEST: {
            return {
                ...state,
                loading: true,
                error: '',
                data: {}
            }
        }
        case NEWS.LATEST_NEWS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload.data
            }
        }
        case NEWS.LATEST_NEWS_FAILURE: {
            return {
                ...state,
                data: {},
                loading: false,
                error: action.payload.error
            }
        }
        case NEWS.ARTICLES_REQUEST: {
            return {
                ...state,
                data: {},
                loading: true,
                error: ""
            }
        }
        case NEWS.ARTICLES_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                error: ""
            }
        }
        case NEWS.ARTICLES_FAILURE: {
            return {
                ...state,
                loading: false,
                data: {},
                error: action.payload.error
            }
        }
        case NEWS.GALLERIES_REQUEST: {
            return {
                ...state,
                loading: true,
                galleryData: [],
                error: ''
            }
        }
        case NEWS.GALLERIES_SUCCESS: {
            return {
                ...state,
                loading: false,
                galleryData: action.payload.data
            }
        }
        case NEWS.GALLERIES_FAILURE: {
            return {
                ...state,
                loading: false,
                galleryData: [],
                error: action.payload.error
            }
        }
        default:
            return state;
    }
}