import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import loginUser from "../requests/loginUser";


function* handleLoginUser(action) {
    try {
        const user = yield call(loginUser,action.submittedUser);
        yield put({type: "LOGIN_USER_SUCCESS", user: user})
        yield put({type: "GET_USER_COMICS_REQUESTED"})
    } catch (err) {
        yield put({type: "LOGIN_USER_FAILED", message: err.message})
    }
}

function* watcherLoginUser() {
    yield takeLatest("LOGIN_USER_REQUESTED", handleLoginUser)
}
export default watcherLoginUser;