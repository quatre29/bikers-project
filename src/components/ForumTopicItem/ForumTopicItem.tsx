import React from "react";
import UserAvatar from "../UserAvatar";
import { Grid, Typography } from "@mui/material";
import useStyles from "./styles";

const ForumTopicItem: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <UserAvatar />
      </Grid>
      <Grid item className={classes.textContainer}>
        <Typography className={classes.usernameText} variant="body1">
          Moderator
        </Typography>
        <Typography variant="body2" color="text.secondary">
          a few seconds ago
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ForumTopicItem;
