import * as Mui from "@mui/material";

export const Intro = () => {
  return (
    <Mui.Stack alignItems="center" justifyContent="center" flexGrow={1}>
      <Mui.Typography variant="h3">Welcome To NetChat</Mui.Typography>
      <Mui.Typography variant="h5" my={2}>
        select a contact to start chatting
      </Mui.Typography>
    </Mui.Stack>
  );
};
