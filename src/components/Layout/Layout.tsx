import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import FabButton from "../FabButton";
import Footer from "../Footer";
import NavBar from "../NavBar";

const Layout: React.FC = () => {
  return (
    <Box component="main">
      <NavBar />
      <Box
        sx={(theme) => ({
          height: theme.spacing(8),
          width: "100%",
        })}
      ></Box>
      <Outlet />
      <FabButton />
      <Footer />
    </Box>
  );
};

export default Layout;
