import React from "react";
import useStyles from "./styles";
import { Grid, Box, Divider, Typography } from "@mui/material";
import UserAvatar from "../../components/UserAvatar";
import { Topic } from "../../models/forumTopics.model";
import * as moment from "moment";

interface Props {
  topicPost?: Topic;
  date: string;
  author: string;
  role: string;
  avatar: string;
  body: string;
}

const ReplyTopic: React.FC<Props> = ({
  topicPost,
  date,
  author,
  role,
  avatar,
  body,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.replyContainer}>
      <Box>
        <Divider />
        <Typography variant="body2" className={classes.replyDate}>
          {moment.parseZone(date).format("LL")}
        </Typography>
        <Divider />
      </Box>
      <Grid container>
        <Grid item xs={3}>
          <Box className={classes.replyUserContainer}>
            <UserAvatar
              online
              variant="rounded"
              size={{ width: 150, height: 200 }}
            />
            <Typography
              variant="h6"
              color="primary"
              sx={(theme) => ({
                fontWeight: "bold",
                marginTop: theme.spacing(2),
              })}
            >
              {author}
            </Typography>
            <Typography color="text.secondary" variant="body1">
              {role}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={9} className={classes.replyTextContainer}>
          {topicPost && (
            <Box className={classes.replyTitleContainer}>
              <Typography
                color="primary"
                variant="h6"
                sx={(theme) => ({ marginBottom: theme.spacing(1) })}
              >
                {topicPost.title}
              </Typography>
              <Divider />
            </Box>
          )}
          <Typography variant="body1">{body}</Typography>
        </Grid>
      </Grid>
      <Box>
        <Divider />

        <Typography className={classes.replyQuote} variant="body2">
          Quote
        </Typography>
        <Divider />
      </Box>
    </Box>
  );
};

export default ReplyTopic;
