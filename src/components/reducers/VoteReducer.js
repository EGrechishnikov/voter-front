export const UPDATE_VOTINGS = 'UPDATE_VOTINGS';
export const GET_VOTING = 'GET_VOTING';
export const REMOVE_CURRENT_VOTING = 'REMOVE_CURRENT_VOTING';

const initialVoteState = {
    votings: [],
    voting: null
};

const voteReducer = function (state = initialVoteState, action) {
    switch (action.type) {
        case UPDATE_VOTINGS :
            return Object.assign({}, state, {
                votings: action.votings.sort((voting1, voting2) => {
                    return voting1.closingDate < voting2.closingDate;
                })
            });
        case GET_VOTING :
            return Object.assign({}, state, {
                voting : state.votings.filter((voting) => {
                    return voting.id === action.id
                })
            });
        case REMOVE_CURRENT_VOTING:
            return Object.assign({}, state, {
                voting : null
            });
        default :
            return state;
    }
};

export default voteReducer;