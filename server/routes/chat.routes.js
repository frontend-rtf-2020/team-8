import express from 'express';
import chatCtrl from '../controllers/chat.controller';
import authCtrl from '../controllers/auth.controller';


const router = express.Router();

router.route('/chat')
    .get(authCtrl.requireSignin, chatCtrl.getAllRooms) // запрос на все чаты
    .post(authCtrl.requireSignin, chatCtrl.createRoom) // создание комнаты

router.route('/chat/messages')
    .post(authCtrl.requireSignin, chatCtrl.addMessage) // добавить сообщение в чат

router.route('/chat/messages/:roomId')
    .get(authCtrl.requireSignin, chatCtrl.getAllMessages) // запрос на все сообщения комнаты


router.param('roomId', chatCtrl.messagesByRoomId);

export default router;