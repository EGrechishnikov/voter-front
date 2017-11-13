export const ADD_VOTE = 'ADD_VOTE';

const initialState = {
    votes : []
};

const voteReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_VOTE :
            let updatedVotes = state.votes;
            updatedVotes.push(action.vote);
            return Object.assign({}, state, {votes : updatedVotes});
        default :
            return state;
    }
};

export default voteReducer;