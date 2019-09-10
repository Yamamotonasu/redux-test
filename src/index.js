import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import reducer from './reducers/index'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// シングルトンとして定義する(storeにreducerを渡す)
// componentへstoreを一発で渡す為にproviderを使って渡す事が出来る
const store = createStore(reducer)

//providerにstoreという属性にstoreを渡してあげる事によってstoreを参照してrenderする事が出来る?
ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
