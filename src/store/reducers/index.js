import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import hkReducer from './hkreducer.js';

let store = createStore(combineReducers({
    hk:hkReducer,
}), applyMiddleware(thunk))

export default store;