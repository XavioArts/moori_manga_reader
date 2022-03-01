import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import updateUser from "../requests/updateUser";

function* handleUpdateUser(action) {
    try {
        const user = yield call(updateUser,action.submittedUser);
        yield put({type: "UPDATE_USER_SUCCESS", user: user})
    } catch (err) {
        yield put({type: "UPDATE_USER_FAILED", message: err.message})
    }
}

function* watcherUpdateUser() {
    yield takeLatest("UPDATE_USER_REQUESTED", handleUpdateUser)
}
export default watcherUpdateUser;