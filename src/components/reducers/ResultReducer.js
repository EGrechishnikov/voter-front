export const ADD_RESULT = 'ADD_RESULT';
export const CLEAR_RESULT = 'CLEAR_RESULT';

const initialState = {
    result : null
};

const resultReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_RESULT:
            return Object.assign({}, state, {result : action.result});
        case CLEAR_RESULT:
            return Object.assign({}, state, {result : null});
        default:
            return state;
    }
};

export default resultReducer;