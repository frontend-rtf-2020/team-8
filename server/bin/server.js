import app from '../app';
import socketIo from 'socket.io';
import config from '../config/config'

const expressServer = app.listen(config.port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

/*
const io = socketIo(expressServer);

io.on("connection", socket => {
  socket.on("join", async room => {
    socket.join(room);
    io.emit("roomJoined", room);
  });
  socket.on("message", async data => {
    const { chatRoomName, author, message } = data;
    const chatRoom = await models.ChatRoom.findAll({
      where: { name: chatRoomName },
    });
    const chatRoomId = chatRoom[0].id;
    const chatMessage = await models.ChatMessage.create({
      chatRoomId,
      author,
      message: message,
    });
    io.emit("newMessage", chatMessage);
  });
}); */
