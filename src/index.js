import React from 'react';
import ReactDOM from 'react-dom';
// redux-applyMiddlewareとredux-thunk
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import reducer from './reducers/index'
import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';

// シングルトンとして定義する(storeにreducerを渡す)
// componentへstoreを一発で渡す為にproviderを使って渡す事が出来る

// createStoreの第二引数にapplyMiddlewareを加える事によってthunkを追加する事が出来る
const store = createStore(reducer, applyMiddleware(thunk))

//providerにstoreという属性にstoreを渡してあげる事によってstoreを参照してrenderする事が出来る?
ReactDOM.render(
  <Provider store={store}>
    <EventsIndex  />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
