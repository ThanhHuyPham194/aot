// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import infoReducer from './infoReducer';
import postReducer from './postReducer';
import homeReducer from './homeReducer';

import rootSaga from './rootSaga';
import serviceReducer from './serviceReducer';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    service: serviceReducer,
    posts: postReducer,
    info: infoReducer,
    home: homeReducer,
});
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

store.dispatch({
    type: 'FETCH_SERVICE_DATA',
});

store.dispatch({
    type: 'FETCH_INFO_DATA',
});
store.dispatch({
    type: 'FETCH_POSTS_DATA',
});
store.dispatch({
    type: 'FETCH_HOME_DATA',
});

export default store;