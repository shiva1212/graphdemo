import { call, put, takeLatest, all } from 'redux-saga/effects'
import {
    LOAD_DATA_REQUEST,
    LOAD_DATA_RESPONSE,
} from '../action';

function* requestData(action) {
    try {
        yield put({ type: LOAD_DATA_RESPONSE, data: {test: true}, });
    }
    catch (err) {
        console.log(err)
       //yield put({ type: ERROR_SEARCH, data: true, });
    }
}

function* actionWatcher() {
    yield takeLatest(LOAD_DATA_REQUEST, requestData);
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}