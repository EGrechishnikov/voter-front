import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/UsersReducer';
import validationReducer from './reducers/ValidationReducer';
import votingReducer from "./reducers/VotingReducer";
import voteReducer from "./reducers/VoteReducer";
import resultReducer from "./reducers/ResultReducer";

const reducers = combineReducers({
    userState : userReducer,
    validState : validationReducer,
    votingState : votingReducer,
    voteState : voteReducer,
    resultState : resultReducer
});

let store = createStore(reducers);

export default store;