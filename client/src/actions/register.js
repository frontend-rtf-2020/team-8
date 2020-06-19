import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, VERIFICATION_SUCCESS, VERIFICATION_FAIL } from './constants';
import { setAlert } from './alert';

export const register = ({ login, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({ login, email, password });

    try {        
        await axios.post('/api/users', body, config);

        dispatch({ type: REGISTER_SUCCESS, payload: { email } });
    } catch (err) {
        if (err.response) {
            const errors = err.response.data.errors;
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({ type: REGISTER_FAIL });
    }
}

export const repeatSending = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({ email });

    try {        
        await axios.post('/api/resend/', body, config);

        dispatch({ type: REGISTER_SUCCESS, payload: { email } });
    } catch (err) {
        if (err.response) {
            const errors = err.response.data.errors;
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({ type: REGISTER_FAIL });
    }
};

export const verifyAccount = (token) => async dispatch => {
    try {
        await axios.post('/api/confirmation/'+ token);

        dispatch({ type: VERIFICATION_SUCCESS });
    } catch (err) {
        if (err.response) {
            const errors = err.response.data.errors;
            dispatch({ type: VERIFICATION_FAIL, payload: { errors } });
        }
    }
}