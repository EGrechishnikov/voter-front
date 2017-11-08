export const ADD_VOTE = 'ADD_VOTE';

const initialVoteState = {
    vote: null
};

const voteReducer = function (state = initialVoteState, action) {
    switch (action.type) {
        case ADD_VOTE :
            return Object.assign({}, state, {vote : action.vote});
        default :
            return state;
    }
};

export default voteReducer;