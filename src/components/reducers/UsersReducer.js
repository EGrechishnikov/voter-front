const initialUserState = {
    user: null
};

const userReducer = function (state = initialUserState, action) {
    switch (action.type) {
        case 'USER_ADD' :
            console.log('login: ' + action.user);
            localStorage.setItem('user', action.user);
            return Object.assign({}, state, {user: action.user});
        default :
            return state;
    }
};

export default userReducer;