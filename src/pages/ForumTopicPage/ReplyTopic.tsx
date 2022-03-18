import React from "react";
import useStyles from "./styles";
import { Grid, Box, Divider, Typography } from "@mui/material";
import UserAvatar from "../../components/UserAvatar";

interface Props {
  topicPost?: boolean;
}

const ReplyTopic: React.FC<Props> = ({ topicPost }) => {
  const classes = useStyles();
  return (
    <Box className={classes.replyContainer}>
      <Box>
        <Divider />
        <Typography variant='body2' className={classes.replyDate}>
          Match 11, 2022
        </Typography>
        <Divider />
      </Box>
      <Grid container>
        <Grid item xs={3}>
          <Box className={classes.replyUserContainer}>
            <UserAvatar
              online
              variant='rounded'
              size={{ width: 150, height: 200 }}
            />
            <Typography
              variant='h6'
              color='primary'
              sx={(theme) => ({
                fontWeight: "bold",
                marginTop: theme.spacing(2),
              })}
            >
              Username
            </Typography>
            <Typography color='text.secondary' variant='body1'>
              Moderator
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={9} className={classes.replyTextContainer}>
          {topicPost && (
            <Box className={classes.replyTitleContainer}>
              <Typography
                color='primary'
                variant='h6'
                sx={(theme) => ({ marginBottom: theme.spacing(1) })}
              >
                This is a title
              </Typography>
              <Divider />
            </Box>
          )}
          <Typography variant='body1'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Typography variant='body1'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
      </Grid>
      <Box>
        <Divider />

        <Typography className={classes.replyQuote} variant='body2'>
          Quote
        </Typography>
        <Divider />
      </Box>
    </Box>
  );
};

export default ReplyTopic;
