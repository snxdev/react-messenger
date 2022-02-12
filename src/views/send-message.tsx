import * as Mui from "@mui/material";
import { useContext, useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import * as contexts from "src/contexts";

export const SendMessage = () => {
  const socket = useContext(contexts.SocketContext);
  const chatRoom = useContext(contexts.ChatRoomContext);
  const messages = useContext(contexts.MessagesContext);
  const inputRef = useRef(document.createElement("input"));

  const handleClick = () => {
    const sendToRoom = chatRoom?.contact.uuid;
    const messageToSend = inputRef.current.value;

    socket.emit("Event:SendMessage", {
      room: sendToRoom,
      message: messageToSend,
    });

    messages?.cacheMessage({
      room: sendToRoom ? sendToRoom : "",
      owner: true,
      message: messageToSend,
      unread: false,
    });

    inputRef.current.value = "";
  };

  return (
    <Mui.Stack direction="row" spacing={2} p={2} alignItems="center">
      <Mui.TextField
        fullWidth
        multiline
        inputRef={inputRef}
        placeholder={`Message To ${chatRoom?.contact.name}...`}
      />
      <Mui.IconButton color="primary" onClick={handleClick}>
        <SendIcon />
      </Mui.IconButton>
    </Mui.Stack>
  );
};
