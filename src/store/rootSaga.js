import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import serviceInfo from '../service/serviceInfo';
import servicePosts from '../service/servicePosts';
import serviceService from '../service/serviceService';
import serviceHome from '../service/serviceHome';

function* fetchServiceData() {
    try {
        let result = yield call(serviceService());
        yield put({
            type: 'GET_SERVICE',
            payload: result
        });
    } catch (error) {
        throw error;
    }
}

function* fetchPostsData() {
    try {
        let result = yield call(servicePosts());
        yield put({
            type: 'GET_POSTS',
            payload: result,
        });
    } catch (error) {
        throw error;
    }
}
function* fetchInfoData() {
    try {
        let result = yield call(serviceInfo());
        yield put({
            type: 'GET_INFO',
            payload: result,
        });
    } catch (error) {
        throw error;
    }
}
function* fetchHomeData() {
    try {
        let result = yield call(serviceHome());
        yield put({
            type: 'GET_HOME',
            payload: result,
        });
    } catch (error) {
        throw error;
    }
}

function* rootSaga() {
    yield takeEvery('FETCH_SERVICE_DATA', fetchServiceData);
    yield takeEvery('FETCH_INFO_DATA', fetchInfoData);
    yield takeEvery('FETCH_POSTS_DATA', fetchPostsData);
    yield takeEvery('FETCH_HOME_DATA', fetchHomeData);
}



export default rootSaga;