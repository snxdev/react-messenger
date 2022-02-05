import SendIcon from "@mui/icons-material/Send";
import * as Mui from "@mui/material";

export const SendMessage = () => {
  return (
    <Mui.Stack direction="row" spacing={2} p={2} alignItems="center">
      <Mui.TextField fullWidth multiline />
      <Mui.IconButton color="primary">
        <SendIcon />
      </Mui.IconButton>
    </Mui.Stack>
  );
};
