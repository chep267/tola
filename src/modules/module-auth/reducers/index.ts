/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { emptyUser } from '@module-auth/constants/User';
import { createReducer } from '@reduxjs/toolkit';
import { AuthReducerProps } from '@module-auth/constants/Type';
import SignInReducers from './SignIn';

const initialState: AuthReducerProps = {
    isAuthUser: localStorage.getItem('ctl.status') === 'save',
    email: localStorage.getItem('ctl.email') || '',
    pathName: '/',
    meId: '',
    user: emptyUser,
    image: {
        avatar: '',
        background: '',
    },
};

const AuthReducer = createReducer(initialState, {
    ...SignInReducers,
});
export default AuthReducer;

// export default function AuthReducer(state = initialState, action: any) {
//     const { payload, type } = action;
//
//     switch (type) {
//         case SIGN_IN_ACTION.SIGN_IN.SUCCESS:
//             // eslint-disable-next-line no-case-declarations
//             const { uid, info } = payload.user;
//             localStorage.setItem('iMeetingUid', uid);
//             return { ...state, isAuthUser: true, email: info.email, meId: uid, user: payload.user };
//         case SIGN_IN_ACTION.SIGN_IN.FAILURE:
//             return { ...state, isAuthUser: false, meId: '' };
//         case SIGN_IN_ACTION.REGISTER.SUCCESS:
//             localStorage.setItem('iMeetingEmail', payload.email);
//             return { ...state, email: payload.email };
//         case SIGN_IN_ACTION.SIGN_OUT:
//             localStorage.setItem('ctl.status', 'out');
//             return { ...state, isAuthUser: false, user: emptyUser, meId: '' };
//         case SIGN_IN_ACTION.START_APP.SUCCESS:
//             // eslint-disable-next-line no-case-declarations
//             const { avatar, background } = payload;
//             return { ...state, image: { avatar, background } };
//         // case SIGN_IN_ACTION.CHANGE_USER_INFO.SUCCESS:
//         //     return { ...state, user: payload.user };
//         case SIGN_IN_ACTION.CHANGE_PATH_NAME:
//             return { ...state, pathName: payload.pathName };
//         default:
//             return state;
//     }
// }
