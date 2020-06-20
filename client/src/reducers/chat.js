import { GET_CHAT_ROOMS, GET_MESSAGES } from '../actions/constants';

const initialState = {
    rooms: [],
    currentRoomId: 0,
    messages: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_CHAT_ROOMS:
            return {
                ...state,
                rooms: payload
            };
        case GET_MESSAGES:
            if (state.currentRoomId !== payload.roomId) {
                return {
                    ...state,
                    currentRoomId: payload.roomId,
                    messages: payload.messages
                }
            } else {
                return {
                    ...state,
                    messages: payload.messages
                };
            }

        default:
            return state;
    }
};