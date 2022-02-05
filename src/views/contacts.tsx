import * as Mui from "@mui/material";
import { ContactCard } from "src/components";

export const Contacts = () => {
  const contactsList = [
    { name: "Jim Halpert 1", uuid: "21" },
    { name: "Jim Halpert 2", uuid: "13" },
  ];

  return (
    <Mui.Stack p={1} sx={contactListStyles}>
      {contactsList.map((contact, index) => (
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
