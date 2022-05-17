import React from "react";
import { useNavigate } from "react-router-dom";
import UnauthorizedSVG from "../../assets/pages/401.svg";
import { Box, Typography, Button } from "@mui/material";
import useStyles from "./styles";

const UnauthorizedPage: React.FC = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const goBack = () => navigate(-1);

  return (
    <Box className={classes.container}>
      <img
        src={UnauthorizedSVG}
        width="500"
        height="500"
        className={classes.image}
      />
      <Typography className={classes.text} variant="h3">
        You do not have access to this page
      </Typography>
      <Button variant="outlined" onClick={goBack} className={classes.button}>
        Go back to Home page
      </Button>
    </Box>
  );
};

export default UnauthorizedPage;
