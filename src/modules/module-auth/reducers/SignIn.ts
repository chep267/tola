/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { SIGN_IN_ACTION, SIGN_IN_WORKING } from '@module-auth/actions/SignIn';

const SignInReducers = {
    [SIGN_IN_ACTION.START_APP.SUCCESS]: SIGN_IN_WORKING[SIGN_IN_ACTION.START_APP.SUCCESS],
    [SIGN_IN_ACTION.SIGN_IN.SUCCESS]: SIGN_IN_WORKING[SIGN_IN_ACTION.SIGN_IN.SUCCESS],
};

export default SignInReducers;
