/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { all, call, spawn } from 'redux-saga/effects';
import authSaga from 'modules/module-auth/sagas/watchers/index';
// import messageSaga from '../../messenger/sagas/watchers/index';

export default function* rootSaga() {
    const sagas = [
        ...authSaga,
        // ...messageSaga,
    ];

    yield all(
        sagas.map((saga) =>
            spawn(function* runSaga() {
                while (true) {
                    try {
                        yield call(saga);
                        break;
                    } catch (e) {
                        console.log('Error Saga: ', e);
                    }
                }
            })
        )
    );
}
