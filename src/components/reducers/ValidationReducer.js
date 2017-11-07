export const ENTRANCE_VALIDATION = 'ENTRANCE_VALIDATION';


const initialUserState = {
    validationMessage: ''
};

const ValidationReducer = function (state = initialUserState, action) {
    switch (action.type) {
        case ENTRANCE_VALIDATION :
            return Object.assign({}, state, {validationMessage: action.validationMessage});
        default :
            return state;
    }
};

export default ValidationReducer;