import * as Mui from "@mui/material";
import { Outlet } from "react-router-dom";
import { Contacts, AddContact } from "src/views";

export const Messaging = () => {
  return (
    <Mui.Grid container pt={8} overflow="hidden" height="100vh">
      <Mui.Grid item xs={12} lg={3} sx={{ boxShadow: "0px 0px 1px" }}>
        <Mui.Stack overflow="hidden" height="100%">
          <Mui.Box position="relative" overflow="hidden" flexGrow={1}>
            <Contacts />
          </Mui.Box>
          <Mui.Box>
            <AddContact />
          </Mui.Box>
        </Mui.Stack>
      </Mui.Grid>
      <Mui.Grid item xs={12} lg={9}>
        <Mui.Stack overflow="hidden" height="100%">
          <Outlet />
        </Mui.Stack>
      </Mui.Grid>
    </Mui.Grid>
  );
};
