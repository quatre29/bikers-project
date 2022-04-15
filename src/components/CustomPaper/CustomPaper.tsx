import React from "react";
import { Paper } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import useStyles from "./styles";

interface Props {
  children: React.ReactNode;
  noPadding?: boolean;
}

const CustomPaper: React.FC<Props> = ({ children, noPadding }) => {
  const classes = useStyles({ noPadding });

  return (
    <Paper
      className={classes.paperContainer}
      //   sx={(theme) => ({
      //     backgroundColor: theme.palette.mode === "light" && deepPurple[100],
      //   })}
      //   sx={(theme) => ({
      //     backgroundColor: theme.palette.mode === "light" && deepPurple[100],
      //   })}
      variant="outlined"
    >
      {children}
    </Paper>
  );
};

export default CustomPaper;
