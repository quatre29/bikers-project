import React from "react";
import useStyles from "./styles";
import { Divider, Grid, Box, Typography } from "@mui/material";
import ForumTopicItem from "../ForumTopicItem";
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";
import { Link } from "react-router-dom";

interface Props {
  pinned?: boolean;
}

const TopicItem: React.FC<Props> = ({ pinned }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Divider className={classes.divider} />
      <Grid container sx={(theme) => ({ marginTop: theme.spacing(2) })}>
        <Grid item xs={1} className={classes.textContainer}>
          {pinned && <PushPinRoundedIcon />}
        </Grid>
        <Grid item xs={4} className={classes.titleTextContainer}>
          <Link
            to='/forum/category/announcements/245454'
            className={classes.titleLink}
          >
            <Typography variant='body1'>This is a title</Typography>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.textContainer}>
          32
        </Grid>
        <Grid item xs={1} className={classes.textContainer}>
          245
        </Grid>
        <Grid item xs={2} className={classes.textContainer}>
          Moderator
        </Grid>
        <Grid item xs={3} className={classes.textContainer}>
          <ForumTopicItem />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopicItem;
