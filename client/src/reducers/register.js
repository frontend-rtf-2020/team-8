import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/constants';

const initialState = {
    email: '',
    isRegistered: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...payload,
                isRegistered: true
            };
        case REGISTER_FAIL:
            return {
                ...state,
                email: null,
                isRegistered: false
            };
        default:
            return initialState;
    }
};