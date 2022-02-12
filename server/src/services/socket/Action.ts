import { Socket } from "socket.io";

export const ActionHandler = (socket: Socket) => {
  const selectTrading = (room: string, index: number) => {
    socket.to(room).emit("tradingBoxSelected", index);
  };

  const openBriefCase = (room: string, index: number) => {
    socket.to(room).emit("openedBox", index);
  };

  const sendOffer = (room: string, amount: number) => {
    socket.to(room).emit("offerPlaced", amount);
  };

  const acceptOffer = (room: string, amount: number) => {
    socket.to(room).emit("offerAccepted", amount);
  };

  const declineOffer = (room: string) => {
    socket.to(room).emit("offerDeclined");
  };

  socket.on("boxSelected", selectTrading);
  socket.on("boxOpened", openBriefCase);
  socket.on("Offer", sendOffer);
  socket.on("game:deal", acceptOffer);
  socket.on("game:nodeal", declineOffer);
};
