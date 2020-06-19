import axios from 'axios';
import { GET_CHAT_ROOMS } from './constants';

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