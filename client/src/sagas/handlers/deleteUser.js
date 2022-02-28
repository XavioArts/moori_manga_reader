import { call, put, takeLatest } from "redux-saga/effects";
import deleteUser from "../requests/deleteUser";

function* handleDeleteUser() {
    try {
        const res = yield call(deleteUser);
        console.log(res.data);
        yield put({type: "DELETE_USER_SUCCESS",})
    } catch (err) {
        yield put({type: "DELETE_USER_FAILED", message: err.message})
    }
}

function* watcherDeleteUser() {
    yield takeLatest("DELETE_USER_REQUESTED", handleDeleteUser)
}

export default watcherDeleteUser;