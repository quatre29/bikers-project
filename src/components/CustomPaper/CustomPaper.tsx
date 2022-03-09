import React from "react";
import { Paper } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import useStyles from "./styles";

const CustomPaper: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.paperContainer}
      //   sx={(theme) => ({
      //     backgroundColor: theme.palette.mode === "light" && deepPurple[100],
      //   })}
      //   sx={(theme) => ({
      //     backgroundColor: theme.palette.mode === "light" && deepPurple[100],
      //   })}
      elevation={3}
    >
      {children}
    </Paper>
  );
};

export default CustomPaper;
