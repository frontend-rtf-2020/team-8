import express from 'express';
import chatCtrl from '../controllers/chat.controller';
import authCtrl from '../controllers/auth.controller';


const router = express.Router();

router.route('/chat')
    .get(authCtrl.requireSignin, chatCtrl.getAllRooms) // запрос на все чаты
    .post(authCtrl.requireSignin, chatCtrl.createRoom) // создание комнаты

router.route('/chat/messages')
    .get(authCtrl.requireSignin, chatCtrl.getAllMessages) // запрос на все сообщения
    .post(authCtrl.requireSignin, chatCtrl.addMessage) // добавить сообщение в чат

export default router;