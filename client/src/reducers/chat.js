import { 
    GET_CHAT_ROOMS, 
    GET_MESSAGES, 
    GET_ALL_USERS, 
    SEARCH, 
    CLEAR_SEARCH,
    CREATE_CHAT } from '../actions/constants';

const initialState = {
    rooms: [],
    currentRoomId: 0,
    messages: [],
    users: [],
    toSearchFor: ''
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
        case CREATE_CHAT:
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
        case GET_ALL_USERS:
            return {
                ...state,
                users: payload.users
            }
        case SEARCH:
            return {
                ...state,
                users: payload.users,
                toSearchFor: payload.toSearchFor
            }
        case CLEAR_SEARCH:
            return {
                ...state,
                toSearchFor: ''
            }
        default:
            return state;
    }
};