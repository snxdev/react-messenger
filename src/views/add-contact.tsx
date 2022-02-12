import * as Mui from "@mui/material";
import { ContactContext } from "src/contexts";
import { useContext, useRef, forwardRef } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export const AddContact = () => {
  const ctx = useContext(ContactContext);
  const inputRef = useRef(document.createElement("input"));

  const handleClick = () => {
    const uuid = inputRef.current?.value;
    ctx?.addContact({
      name: `Unknown ${uuid}`,
      uuid: uuid,
    });
  };

  return (
    <Mui.Stack direction="row" spacing={2} p={2} alignItems="center">
      <Mui.TextField fullWidth inputRef={inputRef} />
      <Mui.IconButton onClick={handleClick}>
        <PersonAddIcon color="primary" />
      </Mui.IconButton>
    </Mui.Stack>
  );
};
