import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './constants';
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

        dispatch({ type: REGISTER_SUCCESS });
    } catch (err) {
        if (err.response) {
            const errors = err.response.data.errors;
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({ type: REGISTER_FAIL });
    }
}