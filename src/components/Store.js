import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/UsersReducer';
import validationReducer from './reducers/ValidationReducer';

const reducers = combineReducers({
    userState : userReducer,
    validState : validationReducer
});

let store = createStore(reducers);

export default store;