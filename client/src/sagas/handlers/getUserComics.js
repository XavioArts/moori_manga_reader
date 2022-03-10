import { call, put, takeLatest } from "redux-saga/effects";
import getUserComics from "../requests/getUserComics";


function* handleGetUserComics() {
    try {
        const res = yield call(getUserComics);
        yield put({type: "GET_USER_COMICS_SUCCESS", publications: res.publications, library: res.library})
    } catch (err) {
        yield put({type: "GET_USER_COMICS_FAILED", message: err.message})
    }
}

function* watcherGetUserComics() {
    yield takeLatest("GET_USER_COMICS_REQUESTED", handleGetUserComics)
}

export default watcherGetUserComics;