import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const ForumPageLayout: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          zIndex: "-100",
          position: "absolute",
          height: "500px",
          width: "100%",
          background:
            "url(https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2142&q=80)",
          // background: `linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)), url(https://images.unsplash.com/photo-1640804243601-3f47ffed52a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "grayscale(100%)",
        }}
      ></Box>
      <Outlet />
    </>
  );
};

export default ForumPageLayout;
