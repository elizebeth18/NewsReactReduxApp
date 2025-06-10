import axios from 'axios';
import { LATEST_NEWS } from '../redux/newsData/actionType';

export const base_url = "http://localhost:7834/";

export const getLatestNews = () => {
    return dispatch => {
        dispatch({
            type: LATEST_NEWS,
            payload: {data: []}
        })

        return axios.get('http://localhost:7834/articles')
        .then((response)=>{
            const resData = response.data;
            dispatch({
                type: LATEST_NEWS,
                payload: {data: resData}
            })
        })
    }
}