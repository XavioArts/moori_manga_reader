export const getUsers = () => {
    return {
        type: "GET_USERS_REQUESTED",
    }
}

export const getUser = () => {
    return {
        type: "GET_USER_REQUESTED",
    }
}

export const loginUser = (submittedUser) => {
    return {
        type: "LOGIN_USER_REQUESTED", 
        // submittedUser: user,
        submittedUser,
    }
}

export const logoutUser = () => {
    return {
        type: "LOGOUT_USER_REQUESTED",
    }
}

export const registerUser = () => {
    return {
        type: "REGISTER_USER_REQUESTED",
    }
}

export const updateUser = () => {
    return {
        type: "UPDATE_USER_REQUESTED",
    }
}

export const deleteUser = () => {
    return {
        type: "DELETE_USER_REQUESTED",
    }
}

export const toggleCheckAuth = () => {
    return {
        type: "TOGGLE_CHECK_AUTH_STATUS",
    }
}