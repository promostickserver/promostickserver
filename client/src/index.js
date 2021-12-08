// db email: promo.stick.server@gmail.com
// pass: givelogin
// github pass: givelogin123
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers'
import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
