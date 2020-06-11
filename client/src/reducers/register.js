import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/constants';

const initialState = {
    isRegistered: null
};

export default function(state = initialState, action) {
    const { type } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                isRegistered: true
            };
        case REGISTER_FAIL:
            return {
                isRegistered: false
            };
        default:
            return initialState;
    }
};