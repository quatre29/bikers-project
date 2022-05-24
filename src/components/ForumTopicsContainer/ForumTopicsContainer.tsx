import React, { useEffect } from "react";
import CustomPaper from "../CustomPaper";
import useStyles from "./styles";
import { Box, Grid, Typography } from "@mui/material";
import ForumCategoryCard from "../ForumCategoryCard";
import TopicItem from "./TopicItem";
import SubForumsCard from "../ForumCategoryCard/SubForumsCard";
import { useParams } from "react-router-dom";
import { useGetForumByIdQuery } from "../../services/forumsApi";
import { toast } from "react-toastify";
import { DataArray } from "@mui/icons-material";
import { useGetTopicsByForumIdQuery } from "../../services/forumTopicsApi";

const ForumTopicsContainer: React.FC = () => {
  const classes = useStyles();
  const { forum_id } = useParams();

  const { data, isLoading, isError } = useGetForumByIdQuery(forum_id!);
  const {
    data: topicsData,
    isLoading: isTopicsLoading,
    isError: isTopicsError,
  } = useGetTopicsByForumIdQuery(forum_id!);

  console.log(topicsData);
  useEffect(() => {
    if (isError || isTopicsError) {
      toast("Something went wrong, please check your connection", {
        type: "error",
      });
    }
  }, [isError, isTopicsError]);

  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing(8) })}>
      <Grid container>
        <Grid item xs={12}>
          {data && !isLoading && (
            <SubForumsCard
              forumId={forum_id!}
              categoryId={data.data.forum.category_id}
              forumName={data.data.forum.name}
              subForumContainer
              categoryName={data.data.forum.category_name!}
              parentForumId={data.data.forum.parent_forum_id}
              parentForumName={data.data.forum.parent_forum_name}
            />
          )}
        </Grid>
        <Grid item xs={12} sx={(theme) => ({ marginTop: theme.spacing(4) })}>
          <CustomPaper>
            <Grid container>
              <Grid item xs={12}>
                <Grid
                  container
                  sx={(theme) => ({ marginBottom: theme.spacing(2) })}
                >
                  <Grid item xs={5}>
                    <Typography variant="body2" className={classes.text}>
                      Topic Title
                    </Typography>
                  </Grid>
                  <Grid item xs={1} className={classes.textContainer}>
                    <Typography variant="body2" className={classes.text}>
                      Replies
                    </Typography>
                  </Grid>
                  <Grid item xs={1} className={classes.textContainer}>
                    <Typography variant="body2" className={classes.text}>
                      Votes
                    </Typography>
                  </Grid>
                  <Grid item xs={2} className={classes.textContainer}>
                    <Typography variant="body2" className={classes.text}>
                      Author
                    </Typography>
                  </Grid>
                  <Grid item xs={3} className={classes.textContainer}>
                    <Typography variant="body2" className={classes.text}>
                      Last post
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                {topicsData &&
                  !isTopicsLoading &&
                  topicsData.data.topics.map((topic, i) => (
                    <TopicItem key={`${topic.topic_id}${i}`} topic={topic} />
                  ))}
              </Grid>
            </Grid>
          </CustomPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForumTopicsContainer;
