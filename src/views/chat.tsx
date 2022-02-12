import * as Mui from "@mui/material";
import { SendMessage } from "src/views";
import { Message } from "src/components";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { SocketContext, MessagesContext } from "src/contexts";

export const Chat = () => {
  const { uuid } = useParams();
  const socket = useContext(SocketContext);
  const messages = useContext(MessagesContext);

  useEffect(() => {
    socket.emit("Event:JoinRoom", uuid);
    socket.on("Event:NewMessage", (receivedMessage) => {
      console.log(receivedMessage);
    });
    return () => {
      socket.off("Event:NewMessage");
      socket.emit("Event:LeaveRoom", uuid);
    };
  });

  return (
    <>
      <Mui.Box position="relative" overflow="hidden" flexGrow={1}>
        <Mui.Stack spacing={2} p={3} sx={chatListStyles}>
          {messages?.messages
            .filter((message) => message.room === uuid)
            .map((message, index) => (
              <Message
                key={index}
                text={message.message}
                owner={message.owner}
              />
            ))}
        </Mui.Stack>
      </Mui.Box>
      <Mui.Box>
        <SendMessage />
      </Mui.Box>
    </>
  );
};

const chatListStyles = {
  position: "absolute",
  overflow: "scroll",
  top: 0,
  left: 0,
  right: -15,
  bottom: -15,
};
