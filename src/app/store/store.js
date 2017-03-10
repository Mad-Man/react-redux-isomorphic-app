import thunk from 'redux-thunk';
import promise from "redux-promise-middleware"
import logger from 'redux-logger';
import {applyMiddleware, combineReducers, createStore} from 'redux';
// app components
import { searchReducer } from '../reducers/search-reducer'
import { listReducer } from '../list/reducers/list-reducer'
import { detailsReducer } from '../details/reducers/details-reducer'

export function store(initialState = undefined) {
    const loggerMiddleware = logger();
    const promiseMiddleware = promise();
    const reducers = combineReducers({
        search: searchReducer,
        list: listReducer,
        details: detailsReducer
    });
    const middleware = applyMiddleware(promiseMiddleware, thunk);
    const store = createStore(
        reducers,
        initialState,
        middleware
    );
    return store;
}
