export const USER_ADD = 'USER_ADD';
export const USER_REMOVE = 'USER_REMOVE';


const initialUserState = {
    user: null
};

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case USER_ADD :
            localStorage.setItem('user', JSON.stringify(action.user));
            return Object.assign({}, state, {user: action.user});
        case USER_REMOVE :
            localStorage.removeItem('user');
            // let newState = Object.assign({}, state);
            // delete newState.user;
            // return newState;
            return Object.assign({}, state, {user: null});
        default :
            return state;
    }
};

export default userReducer;