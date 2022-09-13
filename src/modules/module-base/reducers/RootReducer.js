import { combineReducers } from 'redux';
import LoginReducer from '../../login/reducers/login';
import MessengerReducer from "../../messenger/reduces/message";

const rootReducer = combineReducers({
    login: LoginReducer,
    messenger: MessengerReducer
});
export default rootReducer;
