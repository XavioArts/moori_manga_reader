import { call, put, takeLatest } from "redux-saga/effects";
import getAllComics from "../requests/getAllComics";


function* handleGetAllComics() {
    try {
        const comics = yield call(getAllComics);
        yield put({type: "GET_ALL_COMICS_SUCCESS", comics: comics})
    } catch (err) {
        yield put({type: "GET_ALL_COMICS_FAILED", message: err.message})
    }
}

function* watcherGetAllComics() {
    yield takeLatest("GET_ALL_COMICS_REQUESTED", handleGetAllComics)
}

export default watcherGetAllComics;