import mongoose from 'mongoose';

const ChatRoomSchema = new mongoose.Schema({
    users: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }]
    },
    name: {
        type: String
    }
});

const ChatRoom = mongoose.model('chatroom', ChatRoomSchema);

export default ChatRoom;