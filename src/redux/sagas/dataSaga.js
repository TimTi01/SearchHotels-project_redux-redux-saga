import {put, takeEvery, call} from 'redux-saga/effects';
import {LOAD_DATA, LOAD_DATA_SUCCESS} from "../actions/actions";
import {addDays} from "../../utils";

function* loadDataWorker({payload}) {
    const {location, date, days} = payload
    const checkOut = addDays(date, Number(days))

    const request = yield call(fetch, `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${date}&checkOut=${checkOut}&limit=10`)
    const data = yield call([request, request.json])

    yield put({
        type: LOAD_DATA_SUCCESS,
        payload: data,
    })
}

export function* loadDataWatcher() {
    yield takeEvery(LOAD_DATA, loadDataWorker)
}

