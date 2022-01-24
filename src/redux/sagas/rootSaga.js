import {all} from 'redux-saga/effects';
import {loadDataWatcher} from "./dataSaga";

export function* rootSaga() {
    yield all([loadDataWatcher()])
}