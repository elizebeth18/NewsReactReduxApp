import {newsReducer} from './newsData';
import cakeReducer from './cake/cakeReducer'

const rootReducer = {
    newsData: newsReducer,
    cake: cakeReducer
}

export default rootReducer;