import { all } from "redux-saga/effects";
import watcherDeleteUser from "./handlers/deleteUser";
import watcherUsersSaga from "./handlers/fetchUsers";
import watcherGetAllComics from "./handlers/getAllComics";
import watcherGetUser from "./handlers/getUser";
import watcherGetUserComics from "./handlers/getUserComics";
import watcherLoginUser from "./handlers/loginUser";
import watcherLogoutUser from "./handlers/logoutUser";
import watcherPublishComic from "./handlers/publishComic";
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
        watcherGetAllComics(),
        watcherGetUserComics(),
        watcherPublishComic(),
    ]);
}