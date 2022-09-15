/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { createAction } from '@reduxjs/toolkit';
import { AuthReducerProps } from '@module-auth/constants/Type';

const SIGN_IN_ACTION = {
    START_APP: {
        REQUEST: 'START_APP_REQUEST',
        SUCCESS: 'START_APP_SUCCESS',
    },
    SIGN_IN: {
        SUCCESS: 'SIGN_IN_SUCCESS',
        FAILURE: 'SIGN_IN_FAILURE',
        REQUEST: 'SIGN_IN_REQUEST',
    },
    REGISTER: {
        SUCCESS: 'REGISTER_SUCCESS',
        FAILURE: 'REGISTER_FAILURE',
        REQUEST: 'REGISTER_REQUEST',
    },
    RECOVER: {
        CHECK_EMAIL: 'RECOVER_CHECK_EMAIL',
        SEND_CODE: 'RECOVER_SEND_CODE',
        CHANGE_PASS: 'RECOVER_CHANGE_PASS',
    },
    SIGN_OUT: {
        SUCCESS: 'SIGN_OUT_SUCCESS',
        FAILURE: 'SIGN_OUT_FAILURE',
        REQUEST: 'SIGN_OUT_REQUEST',
    },
    CHANGE_PATH_NAME: 'CHANGE_PATH_NAME',
};

const startAppSuccess = createAction(SIGN_IN_ACTION.START_APP.SUCCESS);

const SIGN_IN_WORKING = {
    [SIGN_IN_ACTION.START_APP.SUCCESS]: (state: AuthReducerProps, { payload }: any) => {
        const { avatar, background } = payload;
        state.user.image = payload;
        state.image.avatar = avatar;
        state.image.background = background;
    },
};

export { SIGN_IN_ACTION, SIGN_IN_WORKING };
