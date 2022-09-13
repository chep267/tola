import {FIREBASE_GET, FIREBASE_SET, FIREBASE_UPDATE, FIREBASE_REMOVE} from '../../apis/firebase';
import {all, call, fork, put, take} from "redux-saga/effects";
import {getAvatarBase, getBackgroundBase} from "../../selectors/firebase";
import {getListUserFromServer} from "../login/LoginAPI";

function* getFirebase(ref, statePath, dataType) {
    const data = yield call(FIREBASE_GET, ref);
    yield put({type: 'UPDATE_DATA', payload: {statePath, data, dataType}});
}

function* postFirebase(ref, statePath, data, dataType) {
    yield fork(FIREBASE_SET, ref, data);
    yield put({type: 'UPDATE_DATA', payload: {statePath, data, dataType}});
}

function* putFirebase(ref, statePath, data, dataType) {
    yield fork(FIREBASE_SET, ref, data);
    yield put({type: 'UPDATE_DATA', payload: {statePath, data, dataType}});
}

function* patchFirebase(ref, statePath, data, dataType) {
    yield fork(FIREBASE_UPDATE, ref, data);
    yield put({type: 'UPDATE_DATA', payload: {statePath, data, dataType}});
}

function* deleteFirebase(ref, statePath) {
    yield fork(FIREBASE_REMOVE, ref);
    yield put({type: 'UPDATE_DATA', payload: {statePath, data: '', dataType: 'string'}});
}

function* getOrderFirebase(path, orderKey, lastValue, size) {
    // let ref = firebase.database().ref(path)
    //     .orderByChild(orderKey)
    //     .limitToLast(size + 1);
    // if (lastValue !== null) {
    //     ref = ref.endAt(lastValue, orderKey);
    // }
    // const data = yield call([ref, ref.once], 'value');
    // return data.val();
}

function* getWatcher() {
    while(true) {
        const result = yield take('GET_DATA');
        yield fork(getFirebase, result.payload);
    }
}

function* postWatcher() {
    while(true) {
        const result = yield take('POST_DATA');
        yield fork(postFirebase, result.payload);
    }
}

function* putWatcher() {
    while(true) {
        const result = yield take('PUT_DATA');
        yield fork(putFirebase, result.payload);
    }
}

function* patchWatcher() {
    while(true) {
        const result = yield take('GET_DATA');
        yield fork(patchFirebase, result.payload);
    }
}

function* deleteWatcher() {
    while(true) {
        const result = yield take('DELETE_DATA');
        yield fork(deleteFirebase, result.payload);
    }
}

function* loadingWatcher() {
    while(true) {
        yield take('GET_DATA_WHEN_LOADING');
        yield fork(loadingWorker);
    }
}

function* loadingWorker() {
    const [avatar, background, users] = yield all([
        call(getAvatarBase),
        call(getBackgroundBase),
        call(getListUserFromServer),
    ]);
    yield put({type: 'UPDATE_DATA_WHEN_LOADING', payload: {users, image: {avatar, background}}});
}

const firebaseSaga = [loadingWatcher, getWatcher, postWatcher, putWatcher, patchWatcher, deleteWatcher];
export default firebaseSaga;