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

export const toggleCheckAuth = () => {
    return {
        type: "TOGGLE_CHECK_AUTH_STATUS",
    }
}