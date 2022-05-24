import React, { useEffect } from "react";
import { Container, Box, Grid, Divider, Typography } from "@mui/material";
import CustomPaper from "../../components/CustomPaper";
import useStyles from "./styles";
import ReplyTopic from "./ReplyTopic";
import { useGetTopicByIdQuery } from "../../services/forumTopicsApi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ForumTopicPage: React.FC = () => {
  const classes = useStyles();
  const { topic_id } = useParams();
  const { data, isLoading, isError } = useGetTopicByIdQuery(topic_id!);
  useEffect(() => {
    if (isError) {
      toast("Something went wrong, please check your connection", {
        type: "error",
      });
    }
  }, [isError]);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <CustomPaper>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={(theme) => ({ marginBottom: theme.spacing(3) })}
          >
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="body2">
                  Forum {">"} Category {">"} Post
                </Typography>
              </Grid>
              <Grid item xs={4} className={classes.postPaginationContainer}>
                <Typography variant="body2">1 2 3 ...last</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {data && !isLoading && (
              <ReplyTopic
                topicPost={data.data.topic}
                date={data.data.topic.created_at}
                author={data.data.topic.author}
                role={data.data.topic.author_role!}
                body={data.data.topic.body}
                avatar={data.data.topic.author_avatar!}
              />
            )}
            {/* <ReplyTopic />
            <ReplyTopic />
            <ReplyTopic /> */}
          </Grid>
        </Grid>
      </CustomPaper>
    </Container>
  );
};

export default ForumTopicPage;
