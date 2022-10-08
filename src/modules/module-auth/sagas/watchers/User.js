// import MAIN_ACTION from '../@module-base/actions/MainAction';
// import { changeUserInfoWorker } from '../workers/User';
// import { fork, take } from 'redux-saga/effects';
//
// export function* changeUserInfoWatcher() {
//     while (true) {
//         const result = yield take(MAIN_ACTION.CHANGE_USER_INFO.REQUEST);
//         yield fork(changeUserInfoWorker, result.payload);
//     }
// }
