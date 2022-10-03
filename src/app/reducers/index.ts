/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { combineReducers } from 'redux';
import authReducer from '@module-auth/reducers/index';
import { stateAuth } from '@module-auth/utils/configs/StoreAuth';
// import MessengerReducer from "modules/module-messenger/reduces/message";

const rootReducer = combineReducers({
    [stateAuth]: authReducer,
    // messenger: MessengerReducer
});
export default rootReducer;
