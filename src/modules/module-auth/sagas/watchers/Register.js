// import { fork, take } from 'redux-saga/effects';
// import { registerWorker } from '../workers/Register';
// import LOGIN_ACTION from '../../actions/Action';
//
// export function* registerWatcher() {
//     while (true) {
//         const result = yield take(LOGIN_ACTION.REGISTER.REQUEST);
//         yield fork(registerWorker, result.payload);
//     }
// }
