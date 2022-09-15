import { call, put, all, fork, select } from 'redux-saga/effects';

// Actions
import { getUserFromServer } from '@module-auth/sagas/helper/SignIn';

// Selectors
import { getMeId } from '@module-auth/selectors/User';
import { SIGN_IN_ACTION } from '@module-auth/actions/SignIn';
import { getAvatarBase, getBackgroundBase } from '@module-base/selectors/Firebase';

// Utils
import localStorage from '@module-base/utils/localStorage';

export function* signInWorker(payload: any) {
    // const { email, password = 'abc123', onFailure = emptyFunction, type = 'account', data = emptyObject } = payload;
    // if (type === 'account') {
    //     const user = yield call(checkSignIn, email, password);
    //     if (user === 404) return onFailure('null');
    //     if (user === 0) return onFailure('wrong');
    //     localStorage.setItem('ctl.status', 'save');
    //     yield put({ type: LOGIN_ACTION.SIGN_IN.SUCCESS, payload: { email, user } });
    //     return null;
    // }
    //
    // // type === 'google' || 'facebook'
    // const user = yield call(checkRegister, email);
    // if (user === 1) {
    //     const uid = genUid();
    //     const { name, avatar } = data;
    //     const { background } = yield select(getState, 'login.image');
    //     const pwEncode = Encrypt(password);
    //     const newUser = { uid, info: { ...emptyUser.info, name, email, password: pwEncode }, image: { avatar, background }, type };
    //     yield call(FIREBASE_SET, { path: `/users/${uid}/`, data: newUser });
    //     yield put({ type: LOGIN_ACTION.SIGN_IN.SUCCESS, payload: { email, user: newUser } });
    //     return null;
    // }
    //
    // localStorage.setItem('ctl.status', 'save');
    // yield put({ type: LOGIN_ACTION.SIGN_IN.SUCCESS, payload: { email, user } });
    // return null;
}

export function* startAppWorker(payload: any): any {
    const { onSuccess = () => null } = payload;
    const isAuthUser = localStorage.get('ctl.status') === 'save';
    if (isAuthUser) {
        const meId = yield select(getMeId);
        const user = yield call(getUserFromServer, meId);
        yield put(user ? { type: SIGN_IN_ACTION.SIGN_IN.SUCCESS, payload: { user } } : { type: SIGN_IN_ACTION.SIGN_IN.FAILURE, payload: {} });
    }
    const [avatar, background] = yield all([call(getAvatarBase), call(getBackgroundBase)]);
    yield put({ type: SIGN_IN_ACTION.START_APP.SUCCESS, payload: { avatar, background } });
    yield fork(onSuccess);
}
