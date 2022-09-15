import { fork, take } from 'redux-saga/effects';

// action
import { SIGN_IN_ACTION } from '@module-auth/actions/SignIn';

// worker
import { signInWorker, startAppWorker } from '@module-auth/sagas/workers/SignIn';

export function* signInWatcher(): any {
    while (true) {
        const result = yield take(SIGN_IN_ACTION.SIGN_IN.REQUEST);
        yield fork(signInWorker, result.payload);
    }
}

export function* startAppWatcher(): any {
    while (true) {
        const result = yield take(SIGN_IN_ACTION.START_APP.REQUEST);
        yield fork(startAppWorker, result.payload);
    }
}
