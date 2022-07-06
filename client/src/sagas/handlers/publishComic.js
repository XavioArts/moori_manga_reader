import { call, put, takeLatest } from "redux-saga/effects";
import newComic from "../requests/newComic";
import newPublication from "../requests/newPublication";


function* handlePublishComic(action) {
    try {
        const comic = yield call(newComic,action.comic);
        const newPub = {title: comic.title, comic_id: comic.id}
        const publication = yield call(newPublication,newPub);
        yield put({type: "PUBLISH_COMIC_SUCCESS", comic: comic})
    } catch (err) {
        yield put({type: "PUBLISH_COMIC_FAILED", message: err.message})
    }
}

function* watcherPublishComic() {
    yield takeLatest("PUBLISH_COMIC_REQUESTED", handlePublishComic)
}
export default watcherPublishComic;