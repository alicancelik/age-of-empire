import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import rootSagas from "./sagas";

const middlewares = [];

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer =  compose(applyMiddleware(...middlewares));

// mount it on the Store
const store = createStore(reducers, composer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// then run the saga
sagaMiddleware.run(rootSagas);

export default store;

// render the application
