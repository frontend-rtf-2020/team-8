import app from '../app';
import config from '../config/config'
const socket = require('socket.io');




const expressServer = app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

const io = socket(expressServer);

io.on("connection", socket => {
  console.log("a user is connected!")
  socket.on("join", async room => {
     console.log("user join a room")
    socket.join(room);
    io.emit("roomJoined", room);
  });

  socket.on("disconnect", async room => {
    console.log("a user is disconnected!")
 });

  socket.on("message", async data => {
    const { chatRoomName, author, message } = data;

    const chatRoom = await models.chatRoom.findAll({
      where: { name: chatRoomName },
    });

    const chatRoomId = chatRoom[0].id;

    const chatMessage = await models.message.create({
      chatRoomId,
      author,
      message: message,
    });
    io.emit("newMessage", chatMessage);
  });
});