import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import hkReducer from './hkreducer.js';
import newAdressReducer from './newadressreducer'
import detailreducer from './detailreducer'

let store = createStore(combineReducers({
    hk:hkReducer,
    ad:newAdressReducer,
    detail:detailreducer
}), applyMiddleware(thunk))

export default store;