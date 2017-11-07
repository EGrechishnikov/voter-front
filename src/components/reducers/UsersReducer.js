export const USER_ADD = 'USER_ADD';
export const USER_REMOVE = 'USER_REMOVE';


const initialUserState = {
    user: null
};

const userReducer = function (state = initialUserState, action) {
    switch (action.type) {
        case USER_ADD :
            localStorage.setItem('user', action.user);
            return Object.assign({}, state, {user: action.user});
        case USER_REMOVE :
            localStorage.removeItem('user');
            let newState = Object.assign({}, state);
            delete newState.user;
            return newState;
        default :
            return state;
    }
};

export default userReducer;