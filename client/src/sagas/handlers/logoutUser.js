import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import logoutUser from "../requests/logoutUser";


function* handleLogoutUser() {
    try {
        const res = yield call(logoutUser);
        console.log(res.data);
        yield put({type: "LOGOUT_USER_SUCCESS",})
    } catch (err) {
        yield put({type: "LOGOUT_USER_FAILED", message: err.message})
    }
}

function* watcherLogoutUser() {
    yield takeLatest("LOGOUT_USER_REQUESTED", handleLogoutUser)
}
export default watcherLogoutUser;