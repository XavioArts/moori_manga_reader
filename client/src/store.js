import { createStore, compose, applyMiddleware } from "redux";
// saga middleware here
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import rootReducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];


const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

const store = compose(
    applyMiddleware(...middleware),
    enhancers
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

if (module.hot) {
    module.hot.accept('./reducers/',() => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;