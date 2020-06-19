import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/me') 
  .get(authCtrl.requireSignin, userCtrl.read); //получить данные пользователя

router.route('/api/users')
  .get(userCtrl.list) //список пользователей
  .post(userCtrl.create) //создать нового пользователя

router.route('/api/confirmation/:token')
  .post(userCtrl.confirm) //верификация

router.route('/api/resend')
  .post(userCtrl.resend) //повторная отправка верификационной ссылки

// DONT REALLY NEED THAT  
/*
router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read) //вывести пользователя по id +
  .post(authCtrl.requireSignin, userCtrl.update) //создать или обновить данные пользователя
  .delete(authCtrl.requireSignin, userCtrl.remove) //удалить пользователя
*/
router.param('userId', userCtrl.userByID)
router.param('token', userCtrl.getToken)

export default router