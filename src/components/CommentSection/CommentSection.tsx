import React, { ChangeEventHandler, useRef, useState } from "react";
import useStyles from "./styles";
import { Box, Grid } from "@mui/material";
import UserAvatar from "../UserAvatar";
import CommentTextEditor from "../CommentTextEditor";
import BlogComment from "../BlogComment";
import { useGetBlogPostCommentsQuery } from "../../services/blogPostApi";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

const CommentSection: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { data, isLoading } = useGetBlogPostCommentsQuery(id!);

  console.log(data, "===========");

  const sendComment = () => {};

  return (
    <Box>
      <Grid container className={classes.container}>
        <Grid item xs={1}>
          <UserAvatar size={{ width: 25, height: 25 }} />
        </Grid>
        <Grid item xs={11}>
          <CommentTextEditor saveBodyData={sendComment} isLoading={false} />
        </Grid>
      </Grid>
      <Box className={classes.comments}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          data?.data.comments.map((comment, i) => (
            <BlogComment key={`${i}${comment.comment_id}`} comment={comment} />
          ))
        )}
      </Box>
    </Box>
  );
};

export default CommentSection;
