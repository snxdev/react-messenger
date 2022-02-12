import { shuffleArray } from "../../utils";
import { Variables } from "../../config";
import { Server, Socket } from "socket.io";

export const ConnectionHandler = (io: Server, socket: Socket) => {
  socket.on("join", (room) => {
    socket.join(room);
    const roomMembers = io.sockets.adapter.rooms.get(room);

    if (roomMembers?.size === 2) {
      const prices = shuffleArray(Variables.moneyTree);
      const boxes = prices.map((amount, index) => ({
        id: index + 1,
        amount: amount,
        opened: false,
      }));

      io.to(room).emit(
        "startGame",
        boxes,
        prices.sort((a, b) => a - b)
      );
    }
  });
};
