import { all, call, spawn} from 'redux-saga/effects';
import loginSaga from '../../login/sagas/watchers/index';
import messageSaga from '../../messenger/sagas/watchers/index';

export default function* rootSaga() {
    const sagas = [
        ...loginSaga,
        ...messageSaga,
    ];

    yield all(sagas.map(saga =>
        spawn(function* runSaga() {
            while (true) {
                try {
                    yield call(saga);
                    break;
                } catch (e) {
                    console.log('Error Saga: ', e);
                }
            }
        }))
    );
}

