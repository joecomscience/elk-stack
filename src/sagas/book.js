import {takeLatest, call, put} from 'redux-saga/effects';
import {
    LOAD_BOOKS,
    SET_BOOKS_TO_THE_LISTS,
    LOAD_BOOKS_ERROR,
} from "../constants/action-types";

const getBooks = () => fetch('http://jsonplaceholder.typicode.com/posts').then(response => response.json());

function* worker() {
    try {
        const payload = yield call(getBooks);
        yield put({type: SET_BOOKS_TO_THE_LISTS, payload});
    } catch (e) {
        yield put({type: LOAD_BOOKS_ERROR, payload: e})
    }
}

export default function* watcherSaga() {
    yield takeLatest(LOAD_BOOKS, worker)
}
