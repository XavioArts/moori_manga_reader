import { call, put, takeEvery } from "redux-saga/effects";
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
    yield takeEvery("LOGOUT_USER_REQUESTED", handleLogoutUser)
}
export default watcherLogoutUser;