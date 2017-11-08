export const ADD_VOTE = 'ADD_VOTE';

const initialVoteState = {
    votes: []
};

const voteReducer = function (state = initialVoteState, action) {
    switch (action.type) {
        case ADD_VOTE :
            let newState = Object.assign({}, state);
            newState.votes.unshift(action.vote);
            return newState;
        default :
            return state;
    }
};

export default voteReducer;