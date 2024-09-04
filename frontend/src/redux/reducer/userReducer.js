const initialState = {
    name: '',
    username: '',
    email: '',
    password: '',
    isLoggedIn: false
}

function userReducer(state = {initialState}, action){
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                name: action.payload.name,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                isLoggedIn: true
            }
        case 'GET_USER':
           return state;
        default:
            return state;
    }
}

export default userReducer;