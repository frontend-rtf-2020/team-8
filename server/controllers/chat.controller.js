import ChatRoom from '../models/ChatRoom';
import Message from '../models/Message';

const createRoom = async (req, res) => {
    const { senderId, receiverId } = req.body;

    try {
        const chat = new ChatRoom({
            users: [senderId, receiverId],
            name: 'private chat'
        });

        await chat.save();

        return res.status(200).json({
            id: chat._id
        });
    } catch (err) {
        console.error(err.message);
        return res.status(400).json({
            errors: [
                {
                    msg: "Внутренняя ошибка при создании чата"
                },
            ],
        });
    }
};

const getAllRooms = async (req, res) => {
    try {
        const rooms = await ChatRoom.find({
            users: req.user.id
        });

        res.json(rooms);
    } catch (err) {
        console.error(err.message);
        return res.status(400).json({
            errors: [
                {
                    msg: "Внутренняя ошибка"
                },
            ],
        });
    }
}

const addMessage = async (req, res) => {
    const { chatId, senderId, content } = req.body;

    try {
        const message = new Message({
            chatRoomId: chatId,
            sender: senderId,
            content
        });

        await message.save();

        return res.status(200).send('Сообщение добавлено в базу');
    } catch (err) {
        console.error(err.message);
        return res.status(400).json({
            errors: [
                {
                    msg: "Внутренняя ошибка при добавлении сообщения в чат"
                },
            ],
        });
    }

}

const messagesByRoomId = async (req, res, next, id) => {
    try {
      const messages = await Message.find({
          chatRoomId: id
      });
      req.messages = messages;
      next();
    } catch (err) {
      res.status(500).send("Server Error");
    }
  };

const getAllMessages = async (req, res) => {
    res.json(req.messages);
};



export default {
    createRoom,
    getAllRooms,
    addMessage,
    messagesByRoomId,
    getAllMessages
}