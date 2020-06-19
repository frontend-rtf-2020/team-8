import { combineReducers } from 'redux';
import alert from './alert';
import register from './register';
import login from './login';
import chat from './chat';

export default combineReducers({
    alert,
    register,
    login,
    chat
});