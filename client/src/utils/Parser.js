import store from '../store';
import axios from 'axios';

export const getUserListFrom = (rooms, myId) => {
    let users = [];
    console.log(rooms)
    rooms.forEach(room => {
        const newUsers = room.users.map(async userId => {
            if (userId !== myId) {
                const res = await axios.get('/api/user/' + userId);
                return res.data;
            }
        })

        users = [...users, newUsers];
    });

    
    return users;
}