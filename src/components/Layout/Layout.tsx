import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const Layout: React.FC = () => {
  return (
    <main className="App">
      <NavBar />
      <Box
        sx={(theme) => ({
          height: theme.spacing(8),
          width: "100%",
        })}
      ></Box>
      <Outlet />
    </main>
  );
};

export default Layout;
