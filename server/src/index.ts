import dotenv from "dotenv";
import { socketHandlers } from "./services";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, { cors: { origin: "*" } });

dotenv.config();
const users = {};

io.on("connection", (socket) => {
  console.log(users[socket.id], socket.rooms);

  socket.on("Event:RegisterUser", (userName) => {
    users[socket.id] = userName;
  });

  socket.on("Event:AddContact", (uuid) => {
    if (uuid in users) {
      socket.emit("Event:ContactAdded", {
        name: users[uuid],
        uuid: uuid,
        online: true,
      });
    }
  });

  // socket.on("Event:JoinRoom", (chatRoom) => {
  //   socket.join(chatRoom);
  //   console.log(users[socket.id], socket.rooms);
  // });

  // socket.on("Event:LeaveRoom", (chatRoom) => {
  //   socket.leave(chatRoom);
  //   console.log(users[socket.id], socket.rooms);
  // });

  socket.on("Event:SendMessage", (payload) => {
    console.log(users[socket.id], socket.rooms);
    io.to(payload.room).emit("Event:NewMessage", {
      sender: { name: users[socket.id], id: socket.id },
      message: payload.message,
      room: payload.room,
    });
  });

  socket.on("disconnect", () => {
    console.log(users[socket.id], socket.rooms);
  });
});

httpServer.listen(process.env.PORT, () => {
  console.log(`server listening on PORT: ${process.env.PORT}`);
});
