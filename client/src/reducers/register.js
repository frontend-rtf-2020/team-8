import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    VERIFICATION_SUCCESS,
    VERIFICATION_FAIL
} from '../actions/constants';

const initialState = {
    email: '',
    isRegistered: false,
    isVerified: false,
    errors: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...payload,
                isRegistered: true,
                errors: []
            };
        case REGISTER_FAIL:
            return {
                ...state,
                email: null,
                isRegistered: false
            };
        case VERIFICATION_SUCCESS: 
            return {
                ...state,
                isVerified: true,
                errors: []
            };
        case VERIFICATION_FAIL:
            return {
                ...state,
                isVerified: false,
                errors: payload.errors
            };
        default:
            return initialState;
    }
};