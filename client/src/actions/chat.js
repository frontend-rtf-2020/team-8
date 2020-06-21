import axios from 'axios';
import { 
    GET_CHAT_ROOMS, 
    GET_MESSAGES, 
    GET_ALL_USERS, 
    SEARCH, 
    CLEAR_SEARCH, 
    CREATE_CHAT } from './constants';

// Get all chat rooms
export const getAllRooms = (id) => async dispatch => {
    try {
        const res = await axios.get('/chat/');

        dispatch({
            type: GET_CHAT_ROOMS,
            payload: res.data
        });
    } catch (err) {
        console.log(err.message);
    }
};

// Get all the messages from the room
export const getAllMessages = (id) => async dispatch => {
    try {
        const res = await axios.get('/chat/messages/' + id);
        
        dispatch({
            type: GET_MESSAGES,
            payload: {
                roomId: id,
                messages: res.data
            }
        })
    } catch (err) {
        console.log(err.message);
    }
}

// Geta all users
export const getAllUsers = () => async dispatch => {
    try {
        const res = await axios.get('/api/users');

        dispatch({
            type: GET_ALL_USERS,
            payload: {
                users: res.data
            }
        });
    } catch (err) {
        console.log(err.message);
    }
}

export const setToSearchFor = (login) => async dispatch => {
    try {
        const res = await axios.get('/api/users');

        dispatch({
            type: SEARCH,
            payload: {
                users: res.data,
                toSearchFor: login
            }
        });
    } catch (err) {
        console.log(err.message);
    }
}

export const clearSearch = () => async dispatch => {
    dispatch({
        type: CLEAR_SEARCH
    });
}

export const createChat = (senderId, receiverId) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ senderId, receiverId });

    try {
        const res = await axios.post('/chat/', body, config);

        dispatch({
            type: CREATE_CHAT,
            payload: {
                roomId: res.data.id,
                messages: []
            }
        })
    } catch (err) {
        console.log(err);
    }
}