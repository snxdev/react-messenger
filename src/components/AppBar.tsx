import * as Mui from "@mui/material";
import { useContext } from "react";
import { ChatContext } from "src/contexts";
import CircleIcon from "@mui/icons-material/Circle";

export const AppBar = () => {
  const chatCtx = useContext(ChatContext);

  return (
    <Mui.AppBar position="fixed">
      <Mui.Toolbar>
        <Mui.Typography variant="h5" flexGrow={1}>
          NETCHAT
        </Mui.Typography>
        {chatCtx?.contact ? (
          <>
            <Mui.Typography variant="h5" mr={2}>
              {chatCtx?.contact.name}
            </Mui.Typography>
            <CircleIcon
              color={chatCtx?.contact.online ? "success" : "disabled"}
              sx={{ m: 1 }}
            />
            {chatCtx?.contact.online ? (
              <Mui.Typography>Online</Mui.Typography>
            ) : null}
          </>
        ) : null}
      </Mui.Toolbar>
    </Mui.AppBar>
  );
};
