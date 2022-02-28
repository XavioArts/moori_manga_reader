import { all } from "redux-saga/effects";
import watcherDeleteUser from "./handlers/deleteUser";
import watcherUsersSaga from "./handlers/fetchUsers";
import watcherGetUser from "./handlers/getUser";
import watcherLoginUser from "./handlers/loginUser";
import watcherLogoutUser from "./handlers/logoutUser";
import watcherRegisterUser from "./handlers/registerUser";
import watcherUpdateUser from "./handlers/updateUser";

export default function* rootSaga() {
    yield all([
        watcherUsersSaga(),
        watcherGetUser(),
        watcherLoginUser(),
        watcherLogoutUser(),
        watcherDeleteUser(),
        watcherRegisterUser(),
        watcherUpdateUser(),
    ]);
}