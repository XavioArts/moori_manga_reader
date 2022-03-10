import { combineReducers } from "redux";
import user from "./user";
import users from "./users";
import comics from "./comics";

const rootReducer = combineReducers({
    user,
    users,
    comics,
});

export default rootReducer;