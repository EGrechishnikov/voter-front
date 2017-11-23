export const UPDATE_VOTINGS = 'UPDATE_VOTINGS';
export const SET_PROPS = 'SET_PROPS';
export const SET_PAGES_COUNT = 'SET_PAGES_COUNT';

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
                pagesCount: action.pagesCount
            });
        case SET_PAGES_COUNT :
            return Object.assign({}, state, {
                pagesCount: Math.ceil(state.votings.length/state.recordCountPerPage) + 1
            });
        case SET_PROPS :
            return Object.assign({}, state, {recordCountPerPage: action.recordCountPerPage});
        default :
            return state;
    }
};

export default votingReducer;