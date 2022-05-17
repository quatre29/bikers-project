import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import UnderConstructionSVG from "../../assets/pages/construction.svg";

const UnderConstruction: React.FC = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <img
        src={UnderConstructionSVG}
        width="350"
        height="350"
        className={classes.image}
      />
      <Typography variant="h4" className={classes.text}>
        This page is under construction and it will be available as soon as
        possible
      </Typography>
    </Box>
  );
};

export default UnderConstruction;
