/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { combineReducers } from 'redux';
import authReducer from 'modules/module-auth/reducers/index';
// import MessengerReducer from "modules/module-messenger/reduces/message";

const rootReducer = combineReducers({
    auth: authReducer,
    // messenger: MessengerReducer
});
export default rootReducer;
