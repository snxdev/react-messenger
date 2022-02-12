import { useContext } from "react";
import { contact } from "src/ts";
import * as Mui from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { ChatRoomContext, ContactContext } from "src/contexts";

export const ContactCard = (props: ContactCardProps) => {
  const navigate = useNavigate();
  const chatRoom = useContext(ChatRoomContext);
  const contacts = useContext(ContactContext);

  const ContactContainer = styled(Mui.Box)(({ theme }) => ({
    "&:hover": { background: theme.palette.secondary.light },
  }));

  const handleClick = () => {
    navigate(`${props.contact.uuid}`);
    const currentContact = contacts?.contactsList.find(
      (contact) => contact.uuid === props.contact.uuid
    );
    chatRoom?.setChatRoom(currentContact);
  };

  return (
    <ContactContainer onClick={handleClick}>
      <Mui.Stack direction="row" spacing={2} alignItems="center" p={1}>
        <Mui.Avatar {...stringAvatar(props.contact.name)} />
        <Mui.Typography>{props.contact.name}</Mui.Typography>
      </Mui.Stack>
    </ContactContainer>
  );
};

interface ContactCardProps {
  contact: contact;
}

const stringAvatar = (name: string) => {
  const nameSplit = name.split(" ");
  const firstLetter = nameSplit[0][0];
  const secondLetter = nameSplit.length > 1 ? nameSplit[1][0] : nameSplit[0][1];
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${firstLetter}${secondLetter}`,
  };
};

const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};
