import { LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR } from '../actions/constants';

const initialState = {
    token: localStorage.getItem('token'),
    isWrongData: false,
    isAuthenticated: false,
    userData: {},
    needVerification: false
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case USER_LOADED: 
            return {
                ...state,
                isWrongData: false,
                isAuthenticated: true,
                userData: payload
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                isWrongData: false,
                isAuthenticated: true
            };
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                isWrongData: true,
                isAuthenticated: false,
                userData: {},
                needVerification: payload.needVerification
            }
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
                userData: {}
            };
        default:
            return state;
    }
};