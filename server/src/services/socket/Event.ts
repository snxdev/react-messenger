import { Socket } from "socket.io";

export const EventHandler = (socket: Socket) => {
  const actionPause = (room: string) => {
    socket.to(room).emit("gamePaused");
  };

  const actionResume = (room: string) => {
    socket.to(room).emit("gameResumed");
  };

  const actionQuit = (room: string) => {
    socket.to(room).emit("gameEnded");
    socket.leave(room);
    socket.disconnect(true);
  };

  const levelCompleted = (room: string) => {
    socket.to(room).emit("completedLevel");
  };

  const GameTerminated = (room: string) => {
    socket.to(room).emit("tradeBoxWon");
  };

  socket.on("Level Complete", levelCompleted);
  socket.on("action:pause", actionPause);
  socket.on("action:resume", actionResume);
  socket.on("action:quit", actionQuit);
  socket.on("game:end", GameTerminated);
};
