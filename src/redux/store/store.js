import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../reducers/rootReducer";
import {rootSaga} from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
    // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)

sagaMiddleware.run(rootSaga)