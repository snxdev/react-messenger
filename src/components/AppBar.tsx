import * as Mui from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export const AppBar = () => {
  const displayName = "Jim Halpert";
  const online = true;

  return (
    <Mui.AppBar position="fixed">
      <Mui.Toolbar>
        <Mui.Typography variant="h5" flexGrow={1}>
          NETCHAT
        </Mui.Typography>
        <Mui.Typography variant="h5" mr={2}>
          {displayName}
        </Mui.Typography>
        <CircleIcon color={online ? "success" : "disabled"} sx={{ m: 1 }} />
        {online ? <Mui.Typography>Online</Mui.Typography> : null}
      </Mui.Toolbar>
    </Mui.AppBar>
  );
};
