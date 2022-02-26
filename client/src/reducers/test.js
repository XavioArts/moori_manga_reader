////// NO LONGER NEEDED /////////

const test = ( state = [], action ) => {
    switch(action.type) {
        case "TESTS":
            return action.tests;
        case "ADD_TEST":
            return [action.test, ...state];
        default:
            return state
    }
}

export default test;