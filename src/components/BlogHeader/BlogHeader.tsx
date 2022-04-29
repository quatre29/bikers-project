import React from "react";
import BlogHeaderPost from "../BlogHeaderPost";
import { Grid } from "@mui/material";
import useStyles from "./styles";
import { toast } from "react-toastify";
import { BlogPostsResponse } from "../../models/response.model";

interface Props {
  data: BlogPostsResponse | undefined;
  isError: boolean;
  isSuccess: boolean;
}

const BlogHeader: React.FC<Props> = ({ data, isError, isSuccess }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {isError && toast("Something went wrong", { type: "error" })}
      {isSuccess &&
        data?.data.posts.map((post, i) =>
          i === 0 ? (
            <Grid key={`${post.post_id}${i}`} item xs={12}>
              <BlogHeaderPost data={post} />
            </Grid>
          ) : (
            <Grid key={`${post.post_id}${i}`} item md={6} xs={12}>
              <BlogHeaderPost secondary data={post} />
            </Grid>
          )
        )}
    </Grid>
  );
};

export default BlogHeader;
