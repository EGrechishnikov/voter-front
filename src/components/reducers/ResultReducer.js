export const ADD_RESULT = 'ADD_RESULT';

const initialState = {
    result : null
};

const resultReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_RESULT:
            return Object.assign({}, state, {result : action.result});
        default:
            return state;
    }
};

export default resultReducer;