import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, LOGOUT } from './constants';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

// Load user
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/me/');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
    }
};

// Login user
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/auth/signin/', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        let needVerification = false;
        if (err.response) {
            const errors = err.response.data.errors;
            errors.forEach(error => {
                if (error.needVerification) 
                    needVerification = true;
            });
        }

        dispatch({
            type: LOGIN_FAIL,
            payload: {
                needVerification
            }
        });
    }
}

// Log out
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
}