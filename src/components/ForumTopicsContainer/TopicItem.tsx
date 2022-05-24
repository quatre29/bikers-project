import React from "react";
import useStyles from "./styles";
import { Divider, Grid, Box, Typography } from "@mui/material";
import ForumTopicItem from "../ForumTopicItem";
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarIcon from "@mui/icons-material/Star";
import { Topic } from "../../models/forumTopics.model";

interface Props {
  topic: Topic;
}

const TopicItem: React.FC<Props> = ({ topic }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Divider className={classes.divider} />
      <Grid container sx={(theme) => ({ marginTop: theme.spacing(2) })}>
        <Grid item xs={1} className={classes.textContainer}>
          {topic.pinned && <PushPinRoundedIcon />}
        </Grid>
        <Grid item xs={4} className={classes.titleTextContainer}>
          <Link
            to={`/forum/topic/${topic.topic_id}`}
            className={classes.titleLink}
          >
            <Typography variant="body1">{topic.title}</Typography>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.textContainer}>
          {topic.replies_count}
        </Grid>
        <Grid item xs={1} className={classes.textContainer}>
          {topic.votes_count}
        </Grid>
        <Grid item xs={2} className={classes.textContainer}>
          {topic.author}
        </Grid>
        <Grid item xs={3} className={classes.textContainer}>
          <ForumTopicItem />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopicItem;
