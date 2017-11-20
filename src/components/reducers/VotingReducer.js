export const UPDATE_VOTINGS = 'UPDATE_VOTINGS';

const initialVoteState = {
    votings: []
};

const votingReducer = (state = initialVoteState, action) => {
    switch (action.type) {
        case UPDATE_VOTINGS :
            return Object.assign({}, state, {
                votings: action.votings.sort((voting1, voting2) => {
                    return voting1.closingDate < voting2.closingDate;
                })
            });
        default :
            return state;
    }
};

export default votingReducer;