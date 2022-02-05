import * as Mui from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

export const ContactCard = (props: ContactCardProps) => {
  const ContactContainer = styled(Mui.Box)(({ theme }) => ({
    "&:hover": { background: theme.palette.secondary.light },
  }));

  return (
    <Link to={props.contact.uuid} style={LinkStyle}>
      <ContactContainer>
        <Mui.Stack direction="row" spacing={2} alignItems="center" p={1}>
          <Mui.Avatar {...stringAvatar(props.contact.name)} />
          <Mui.Typography>{props.contact.name}</Mui.Typography>
        </Mui.Stack>
      </ContactContainer>
    </Link>
  );
};

interface ContactCardProps {
  contact: {
    name: string;
    uuid: string;
  };
}

const LinkStyle = {
  textDecoration: "none",
  color: "unset",
};

const stringAvatar = (name: string) => ({
  sx: {
    bgcolor: stringToColor(name),
  },
  children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
});

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
