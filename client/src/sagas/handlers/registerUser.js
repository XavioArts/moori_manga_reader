import { call, put, takeEvery } from "redux-saga/effects";
import registerUser from "../requests/registerUser";


function* handleRegisterUser(action) {
    try {
        const user = yield call(registerUser,action.submittedUser);
        yield put({type: "REGISTER_USER_SUCCESS", user: user})
    } catch (err) {
        yield put({type: "REGISTER_USER_FAILED", message: err.message})
    }
}

function* watcherRegisterUser() {
    yield takeEvery("REGISTER_USER_REQUESTED", handleRegisterUser)
}
export default watcherRegisterUser;