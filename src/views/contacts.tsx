import { useContext } from "react";
import * as Mui from "@mui/material";
import { ContactContext } from "src/contexts";
import { ContactCard } from "src/components";

export const Contacts = () => {
  const contactCtx = useContext(ContactContext);

  return (
    <Mui.Stack p={1} sx={contactListStyles}>
      {contactCtx?.contactsList.map((contact, index) => (
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
