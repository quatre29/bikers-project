import React from "react";
import useStyles from "./styles";
import {
  Box,
  LinearProgress,
  CircularProgress,
  Typography,
} from "@mui/material";

const LoadingSpinner: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {/* <LinearProgress sx={{ height: "8px" }} /> */}
      <CircularProgress color="primary" />
      <Typography variant="h6" color="primary">
        Loading data...
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
