import React from "react";
import BlogHeaderPost from "../BlogHeaderPost";
import { Grid } from "@mui/material";
import useStyles from "./styles";
import { useGetAllPinnedBlogPostsQuery } from "../../services/blogPostApi";
import { toast } from "react-toastify";

const BlogHeader: React.FC = () => {
  const classes = useStyles();
  const { data, isLoading, isError, isSuccess } =
    useGetAllPinnedBlogPostsQuery();

  return (
    <Grid container spacing={2}>
      {isLoading && <div>Loading...</div>}
      {isError && toast("Something went wrong", { type: "error" })}
      {isSuccess &&
        data.data.posts.map((post, i) =>
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
