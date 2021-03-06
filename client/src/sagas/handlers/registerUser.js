import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import registerUser from "../requests/registerUser";


function* handleRegisterUser(action) {
    try {
        const user = yield call(registerUser,action.submittedUser);
        yield put({type: "REGISTER_USER_SUCCESS", user: user})
        yield put({type: "GET_USER_COMICS_REQUESTED"})
    } catch (err) {
        yield put({type: "REGISTER_USER_FAILED", message: err.message})
    }
}

function* watcherRegisterUser() {
    yield takeLatest("REGISTER_USER_REQUESTED", handleRegisterUser)
}
export default watcherRegisterUser;