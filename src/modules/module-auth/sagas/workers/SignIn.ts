/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { call, put, all, fork, select } from 'redux-saga/effects';

// Apis
import { FIREBASE_SET } from '@src/modules/module-base/apis/Firebase';

// Actions

// Selectors
import { genUid, getMeId } from '@module-auth/selectors/User';
import { SIGN_IN_ACTION } from '@module-auth/actions/SignIn';
import { getAvatarBase, getBackgroundBase } from '@module-base/selectors/Firebase';
import { checkSignIn, getUserFromServer, checkRegister } from '@module-auth/sagas/helper/SignIn';
import { getState } from '@module-base/selectors/Data';

// Utils
import localStorage from '@module-base/utils/localStorage';
import { emptyFunction, emptyObject } from '@src/modules/module-base/constants/object';
import { Encrypt } from '@module-base/utils/security/Cipher';
import { emptyUser } from '@module-auth/constants/User';
import { stateAuth } from '@module-auth/utils/configs/StoreAuth';

export function* signInWorker(payload: any) {
    const { account, password = 'abc123', onFailure = emptyFunction, type = 'account', data = emptyObject } = payload;

    if (type === 'account') {
        // const user = yield call(checkSignIn, account, password);
        // if (user === 404) return onFailure('null');
        // if (user === 0) return onFailure('wrong');
        // localStorage.setItem('ctl.status', 'save');
        yield put({ type: SIGN_IN_ACTION.SIGN_IN.SUCCESS, payload: { account, user: emptyUser } });
        return null;
    }

    // type === 'google' || 'facebook'
    const user = yield call(checkRegister, account);
    if (user === 1) {
        const uid = genUid();
        const { name, avatar } = data;
        const { background } = yield select(getState, [stateAuth, 'image']);
        const pwEncode = Encrypt(password);
        const newUser = {
            uid,
            info: { ...emptyUser.info, name, account, password: pwEncode },
            image: { avatar, background },
            type,
        };
        yield call(FIREBASE_SET, { path: `/users/${uid}/`, data: newUser });
        yield put({ type: SIGN_IN_ACTION.SIGN_IN.SUCCESS, payload: { account, user: newUser } });
        return null;
    }

    // localStorage.setItem('ctl.status', 'save');
    yield put({ type: SIGN_IN_ACTION.SIGN_IN.SUCCESS, payload: { account, user } });
    return null;
}

export function* startAppWorker(payload: any): any {
    const { onSuccess = () => null } = payload;
    const isAuthUser = localStorage.get('ctl.status') === 'save';
    if (isAuthUser) {
        const meId = yield select(getMeId);
        const user = yield call(getUserFromServer, meId);
        yield put(
            user
                ? { type: SIGN_IN_ACTION.SIGN_IN.SUCCESS, payload: { user } }
                : { type: SIGN_IN_ACTION.SIGN_IN.FAILURE, payload: {} }
        );
    }
    const [avatar, background] = yield all([call(getAvatarBase), call(getBackgroundBase)]);
    yield put({ type: SIGN_IN_ACTION.START_APP.SUCCESS, payload: { avatar, background } });
    yield fork(onSuccess);
}
