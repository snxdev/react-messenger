import PersonAddIcon from "@mui/icons-material/PersonAdd";
import * as Mui from "@mui/material";

export const AddContact = () => {
  return (
    <Mui.Stack direction="row" spacing={2} p={2} alignItems="center">
      <Mui.TextField fullWidth />
      <Mui.IconButton>
        <PersonAddIcon color="primary" />
      </Mui.IconButton>
    </Mui.Stack>
  );
};
