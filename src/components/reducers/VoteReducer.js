export const LOAD_MY_VOTES = 'LOAD_MY_VOTES';
export const ADD_MY_VOTE = 'ADD_MY_VOTE';
export const CLEAR_MY_VOTES = 'CLEAR_MY_VOTES';

const initialState = {
    myVotes : null
};

const voteReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MY_VOTE :
            return state.concat(action.vote);
        case LOAD_MY_VOTES :
            return Object.assign({}, state, {myVotes : action.myVotes});
        case CLEAR_MY_VOTES :
            return Object.assign({}, state, {myVotes: null});
        default :
            return state;
    }
};

export default voteReducer;