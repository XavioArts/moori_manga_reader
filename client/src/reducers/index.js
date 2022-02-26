import { combineReducers } from "redux";
import test from './test';
import users from "./users";

const rootReducer = combineReducers({
    test,
    users,
});

export default rootReducer;