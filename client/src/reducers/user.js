const initialState = {
    user: null,
    loading: false,
    error: null,
    checkingAuthStatus: true,
}

const user = (state = initialState, action) => {
    switch(action.type) {
        case "GET_USER_REQUESTED":
            return {...state, loading: true}
        case "GET_USER_SUCCESS":
            return {...state, loading: false, user: action.user, error: null, checkingAuthStatus: false}
        case "GET_USER_FAILED":
            return {...state, loading: false, error: action.message, checkingAuthStatus: false}
        case "TOGGLE_CHECK_AUTH_STATUS":
            return {...state, checkingAuthStatus: !state.checkingAuthStatus}
        case "LOGIN_USER_REQUESTED":
            return {...state, loading: true}
        case "LOGIN_USER_SUCCESS":
            return {...state, loading: false, user: action.user, error: null}
        case "LOGIN_USER_FAILED":
            return {...state, loading: false, error: action.message}
        case "LOGOUT_USER_REQUESTED":
            return {...state, loading: true}
        case "LOGOUT_USER_SUCCESS":
            return {...state, loading: false, user: null, error: null}
        case "LOGOUT_USER_FAILED":
            return {...state, loading: false, error: action.message}
        case "REGISTER_USER_REQUESTED":
            return {...state, loading: true}
        case "REGISTER_USER_SUCCESS":
            return {...state, loading: false, user: action.user, error: null}
        case "REGISTER_USER_FAILED":
            return {...state, loading: false, error: action.message}
        case "UPDATE_USER_REQUESTED":
            return {...state, loading: true}
        case "UPDATE_USER_SUCCESS":
            return {...state, loading: false, user: action.user, error: null}
        case "UPDATE_USER_FAILED":
            return {...state, loading: false, error: action.message}
        case "DELETE_USER_REQUESTED":
            return {...state, loading: true}
        case "DELETE_USER_SUCCESS":
            return {...state, loading: false, user: null, error: null}
        case "DELETE_USER_FAILED":
            return {...state, loading: false, error: action.message}
        default:
            return state;
    }
};

export default user;