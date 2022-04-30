import React from "react";
import { Fab, Zoom } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const FabButton: React.FC = () => {
  const theme = useTheme();

  const transitionDuration = {
    enter: 1000,
    exit: theme.transitions.duration.leavingScreen,
  };
  return (
    <Zoom in timeout={transitionDuration} unmountOnExit>
      <Link to="/new-blog">
        <Fab
          size="large"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          color="primary"
        >
          <AddIcon />
        </Fab>
      </Link>
    </Zoom>
  );
};

export default FabButton;
