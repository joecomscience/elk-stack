import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {logger as loggerMiddleware} from "../middlewares";
import rootReducer from '../reducers';
import bookSaga from '../sagas/book';

const initialSagaMiddleware = createSagaMiddleware();
const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancer(
        applyMiddleware(
            loggerMiddleware,
            initialSagaMiddleware,
        )
    )
);

initialSagaMiddleware.run(bookSaga);

export default store;
