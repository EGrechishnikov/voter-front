import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/UsersReducer';

const reducers = combineReducers({
    userState : userReducer
});

let store = createStore(reducers);

export default store;