import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/constants';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    userData: null
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                isAuthenticated: true
            };
        case LOGIN_FAIL:
            return {
                ...state
            };
        default:
            return state;
    }
};