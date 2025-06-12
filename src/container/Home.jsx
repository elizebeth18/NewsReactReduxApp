import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newsSelectors } from '../redux/newsData';
import {
    getLatestNews,
    getArticleNews,
    getGalleryNews
} from '../services/getNewsData';
import { cakeActions } from '../redux/cake';

import LatestDisplay from '../component/Home/LatestDisplay.jsx';
import ArticleDisplay from '../component/Home/ArticleDisplay.jsx'
import GalleryDisplay from '../component/Home/GalleryDisplay.jsx'

const Home = () => {

    const dispatch = useDispatch();

    //call action
    useEffect(() => {
        dispatch(getLatestNews())
        dispatch(getArticleNews())
        dispatch(cakeActions());
        dispatch(getGalleryNews());
    }, [])

    //get State
    const latestNewslist = useSelector(state => state.newsData.data);

    const numOfCakes = useSelector(state => state.cake.numOfCakes);

    const articleNewslist = useSelector(state => state.newsData.data);

    const galleries = useSelector(state => state.newsData.galleryData)

    return (
        <>
            <LatestDisplay ldata={latestNewslist} />
            <p>Number of cakes: {numOfCakes}</p>
            <ArticleDisplay adata={articleNewslist}/>
            <GalleryDisplay adata={galleries} />
        </>
    )

}
export default Home