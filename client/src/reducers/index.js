import { combineReducers } from 'redux';
import alert from './alert';
import register from './register';

export default combineReducers({
    alert,
    register
});