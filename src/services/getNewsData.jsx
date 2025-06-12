import axios from 'axios';
import {
    fetchNews,
    fetchNewSuccess,
    fetchNewsFail,
    fetchNewsArticles,
    fetchNewsArticlesSuccess,
    fetchNewsArticlesFailure,
    fetchGalleries,fetchGalleriesSuccess,fetchGalleriesFailure

} from '../redux/newsData/newsActions'

export const base_url = "http://localhost:7834";

export const getLatestNews = () => {
    return (dispatch) => {
        
        dispatch(fetchNews);

        return axios.get('http://localhost:7834/articles?_end=3')
            .then((response) => {
                const resData = response.data;
                dispatch(fetchNewSuccess(resData))
            }).catch(error => {
                dispatch(fetchNewsFail(error.message))
            })
    }
}

export const getArticleNews = () => {
    return (dispatch) => {
        dispatch(fetchNewsArticles);
        return axios.get(`${base_url}/articles?_start=3&_end=10`)
        .then((response)=> {
            dispatch(fetchNewsArticlesSuccess(response.data))
        }).catch((error) => {
            dispatch(fetchNewsArticlesFailure(error))
        })
    }
}

export const getGalleryNews = () => {
    return dispatch => {
        dispatch(fetchGalleries);
        axios.get(`${base_url}/galleries`).then((response) => {
            dispatch(fetchGalleriesSuccess(response.data));
        }).catch(error => dispatch(fetchGalleriesFailure(error)))
    }
}