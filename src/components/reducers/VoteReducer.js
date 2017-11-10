export const UPDATE_VOTES = 'UPDATE_VOTES';

const initialVoteState = {
    votes: []
};

const voteReducer = function (state = initialVoteState, action) {
    switch (action.type) {
        case UPDATE_VOTES :
            return Object.assign({}, state, {votes : action.votes});
        default :
            return state;
    }
};

export default voteReducer;