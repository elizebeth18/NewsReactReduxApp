import React,{ createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import store from './redux/store'
import Routing from './component/Routing'

createRoot(document.getElementById('root')).render(
  //view is connecting to store
  <Provider store={store}>
    <Routing />
  </Provider>
);
