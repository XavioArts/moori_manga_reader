import { all } from "redux-saga/effects";
import watcherUsersSaga from "./handlers/fetchUsers";
import watcherGetUser from "./handlers/getUser";
import watcherLoginUser from "./handlers/loginUser";

export default function* rootSaga() {
    yield all([watcherUsersSaga(),watcherGetUser(),watcherLoginUser()]);
}