import * as Mui from "@mui/material";
import { useContext, useRef } from "react";
import { SocketContext, MessagesContext } from "src/contexts";
import { useParams } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

export const SendMessage = () => {
  const { uuid } = useParams();
  const socket = useContext(SocketContext);
  const messages = useContext(MessagesContext);
  const inputRef = useRef(document.createElement("input"));

  const handleClick = () => {
    const currentRoom = uuid ? uuid : "";
    const message = inputRef.current.value;
    socket.emit("Event:SendMessage", { room: currentRoom, message: message });
    messages?.cacheMessage({
      room: currentRoom,
      owner: true,
      message: message,
    });
  };

  return (
    <Mui.Stack direction="row" spacing={2} p={2} alignItems="center">
      <Mui.TextField fullWidth multiline inputRef={inputRef} />
      <Mui.IconButton color="primary" onClick={handleClick}>
        <SendIcon />
      </Mui.IconButton>
    </Mui.Stack>
  );
};
