import { GET_CHAT_ROOMS } from '../actions/constants';

const initialState = {
    rooms: []
};

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case GET_CHAT_ROOMS:
            return {
                ...state,
                rooms: payload
            };
        default:
            return state;
    }
};