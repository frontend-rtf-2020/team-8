import { combineReducers } from 'redux';
import alert from './alert';
import register from './register';
import login from './login';

export default combineReducers({
    alert,
    register,
    login
});