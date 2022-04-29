import React from "react";
import { Grid, Avatar, Paper } from "@mui/material";
import useStyles from "./styles";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.container}>
      <Grid item xs={false} sm={4} md={7} className={classes.image}></Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        className={classes.form}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
