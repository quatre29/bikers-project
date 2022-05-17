import React from "react";
import NotFoundSvg from "../../assets/pages/404.svg";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";

const NotFound: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.container}>
      <img
        src={NotFoundSvg}
        width="500"
        height="500"
        className={classes.image}
      />
      <Button
        variant="outlined"
        onClick={() => navigate("/", { replace: true })}
      >
        Go back to Home page
      </Button>
    </Box>
  );
};

export default NotFound;
