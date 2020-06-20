import axios from 'axios';
import { GET_CHAT_ROOMS, GET_MESSAGES } from './constants';

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