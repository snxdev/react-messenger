import * as Mui from "@mui/material";
import { ContactCard } from "src/components";
import { useContext, useEffect } from "react";
import { ContactContext, SocketContext } from "src/contexts";

export const Contacts = () => {
  const contacts = useContext(ContactContext);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("Event:ContactAdded", (userData) => {
      contacts?.addContact(userData);
    });
    return () => {
      socket.off("Event:ContactAdded");
    };
  }, []);

  return (
    <Mui.Stack p={1} sx={contactListStyles}>
      {contacts?.contactsList.map((contact, index) => (
        <ContactCard key={index} contact={contact} />
      ))}
    </Mui.Stack>
  );
};

const contactListStyles = {
  position: "absolute",
  overflow: "scroll",
  top: 0,
  left: 0,
  right: -15,
  bottom: -15,
};
