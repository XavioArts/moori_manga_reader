import { connect } from "react-redux";
import { call, put, takeEvery } from "redux-saga/effects";
import loginUser from "../requests/loginUser";

// const submitted = useSelector(state => state.user.submittedUser)


function* handleLoginUser(action) {
    // const {submitted} = this.props;
    try {
        const user = yield call(loginUser,action.submittedUser);
        yield put({type: "LOGIN_USER_SUCCESS", user: user})
    } catch (err) {
        yield put({type: "LOGIN_USER_FAILED", message: err.message})
    }
}

// export const connectLogin = connect(mapStateToProps)(handleLoginUser)

function* watcherLoginUser() {
    yield takeEvery("LOGIN_USER_REQUESTED", handleLoginUser)
}
export default watcherLoginUser;