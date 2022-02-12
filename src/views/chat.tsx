import * as Mui from "@mui/material";
import { useParams } from "react-router-dom";
import { Message } from "src/components";
import { useContext } from "react";
import { SendMessage } from "src/views";
import { ChatContext, ContactContext } from "src/contexts";

export const Chat = () => {
  const { uuid } = useParams();
  const chatCtx = useContext(ChatContext);
  const contactCtx = useContext(ContactContext);
  const currentUser = contactCtx?.contactsList.find(
    (contact) => contact.uuid === uuid
  );
  if (currentUser) chatCtx?.setChat(currentUser);

  return (
    <>
      <Mui.Box position="relative" overflow="hidden" flexGrow={1}>
        <Mui.Stack spacing={2} p={3} sx={chatListStyles}>
          <Message text={`Hi Jim ${uuid}`} owner={uuid !== "22"} />
          <Message text={`Hello ${uuid}`} owner={uuid === "22"} />
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
