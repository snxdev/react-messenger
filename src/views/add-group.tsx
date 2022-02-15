import * as Mui from "@mui/material";
import { useContext, useRef, useState } from "react";
import { SocketContext, ContactContext } from "src/contexts";
import { stringAvatar } from "src/utils";
import { contact as contactType } from "src/ts";

export const AddGroup = (props: AddGroupProps) => {
  const socket = useContext(SocketContext);
  const contacts = useContext(ContactContext);
  const inputRef = useRef(document.createElement("input"));
  const [members, setMembers] = useState<contactType[]>([]);

  const handleToggle = (contact: contactType) => () => {
    setMembers([...members, contact]);
  };

  const handleCreateGroup = () => {
    props.onClose();
    console.log("GroupName:", inputRef.current.value);
    console.log("Members", members);
    setMembers([]);
  };

  return (
    <Mui.Dialog open={props.open} fullWidth>
      <Mui.DialogTitle>Create A Group</Mui.DialogTitle>
      <Mui.DialogContent dividers={true}>
        <Mui.Stack spacing={2}>
          <Mui.TextField
            autoFocus
            margin="dense"
            id="name"
            label="Group Name"
            type="text"
            fullWidth
            variant="outlined"
            inputRef={inputRef}
          />
          <Mui.Typography>Select Members</Mui.Typography>
          <Mui.List>
            {contacts?.contactsList.map((contact, index) => (
              <Mui.ListItem
                key={index}
                secondaryAction={
                  <Mui.Checkbox edge="end" onChange={handleToggle(contact)} />
                }
                disablePadding
              >
                <Mui.ListItemButton>
                  <Mui.ListItemAvatar>
                    <Mui.Avatar {...stringAvatar(contact.name)} />
                  </Mui.ListItemAvatar>
                  <Mui.ListItemText primary={contact.name} />
                </Mui.ListItemButton>
              </Mui.ListItem>
            ))}
          </Mui.List>
        </Mui.Stack>
      </Mui.DialogContent>
      <Mui.DialogActions>
        <Mui.Button onClick={props.onClose}>Cancel</Mui.Button>
        <Mui.Button onClick={handleCreateGroup}>Create Group</Mui.Button>
      </Mui.DialogActions>
    </Mui.Dialog>
  );
};

interface AddGroupProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}
