import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {newsSelectors} from '../redux/newsData';
import {
    getLatestNews
} from '../services/getNewsData';
import { cakeActions } from '../redux/cake';

import LatestDisplay from '../component/Home/LatestDisplay.jsx';
import ArticleDisplay from '../component/Home/ArticleDisplay.jsx'

const Home = () => {

    const dispatch = useDispatch();

    //call action
    useEffect(() => {
        dispatch(getLatestNews())
        //dispatch(getArticleNews())
        dispatch(cakeActions())
    },[])

    //get State
    const latestNewslist = useSelector(newsSelectors.getLatestNews)

    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    
    /* const articleNewslist = useSelector(
        newsSelectors.getArticleNews
    ) */

    return(
        <>
            <LatestDisplay ldata={latestNewslist?.data}/>
            <p>Number of cakes: {numOfCakes}</p>
            {/* <ArticleDisplay adata={articleNewslist?.data}/> */}
        </>
    )

}
export default Home