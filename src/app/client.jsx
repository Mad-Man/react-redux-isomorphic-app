// libraries 
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import routes from './routes/routes'
import { store } from './store/store'

const newStore = store(window.__REDUX_STORE || null);
ReactDOM.render(
    <Provider store={newStore}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.getElementById('app')
);
