import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/UsersReducer';
import validationReducer from './reducers/ValidationReducer';
import votingReducer from "./reducers/VotingReducer";
import voteReducer from "./reducers/VoteReducer";

const reducers = combineReducers({
    userState : userReducer,
    validState : validationReducer,
    votingState : votingReducer,
    voteState : voteReducer
});

let store = createStore(reducers);

export default store;