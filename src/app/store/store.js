import thunk from 'redux-thunk';
import promise from "redux-promise-middleware"
import {applyMiddleware, combineReducers, createStore} from 'redux';
// app components
import { listReducer } from '../list/reducers/list-reducer'
import { detailsReducer } from '../details/reducers/details-reducer'

export function store(initialState = undefined) {
    const promiseMiddleware = promise();
    const reducers = combineReducers({
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
