import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as homeReducer from './homeReducer';

export default function store() {
    const middleWare = [ thunk ]

    const rootReducer = combineReducers({
        home: homeReducer.reducer,
    })

    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middleWare))
    )
}