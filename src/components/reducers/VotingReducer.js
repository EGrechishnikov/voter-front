export const UPDATE_VOTINGS = 'UPDATE_VOTINGS';
export const SET_PROPS = 'SET_PROPS';

const initialVoteState = {
    votings: [],
    currPage: 0,
    pagesCount: 0,
    recordCountPerPage: 10
};

const votingReducer = (state = initialVoteState, action) => {
    switch (action.type) {
        case UPDATE_VOTINGS :
            return Object.assign({}, state, {
                votings: action.votings.sort((voting1, voting2) => {
                    return voting1.closingDate < voting2.closingDate;
                }),
                currPage: action.currPage,
                pagesCount: Math.ceil(action.recordsCount / state.recordCountPerPage)
            });
        case SET_PROPS :
            return Object.assign({}, state, {recordCountPerPage: action.recordCountPerPage});
        default :
            return state;
    }
};

export default votingReducer;