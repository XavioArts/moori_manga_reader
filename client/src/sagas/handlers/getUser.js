import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import getUser from "../requests/getUser";


function* handleGetUser() {
    try {
        console.log("validating token");
        const user = yield call(getUser);
        yield put({type: "GET_USER_SUCCESS", user: user})
    } catch (err) {
        yield put({type: "GET_USER_FAILED", message: err.message})
    }
}

function* watcherGetUser() {
    yield takeLatest("GET_USER_REQUESTED", handleGetUser)
}

export default watcherGetUser;