import React from "react";
import { Grid } from "@mui/material";
import BlogPostCard from "../BlogPostCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import BlogTopPostCard from "../BlogTopPostCard";
import { useGetAllNormalBlogPostsQuery } from "../../services/blogPostApi";
import { toast } from "react-toastify";
import { BlogPostsResponse } from "../../models/response.model";

interface Props {
  data: BlogPostsResponse | undefined;
  isError: boolean;
  isSuccess: boolean;
}

const BlogFeed: React.FC<Props> = ({ data, isError, isSuccess }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={2}>
      {isError && toast("Something went wrong", { type: "error" })}
      {isSuccess &&
        data?.data.posts.map((post, i) => (
          <Grid key={`${post.post_id}${i}`} item xs={12}>
            {matches ? (
              <BlogTopPostCard data={post} />
            ) : (
              <BlogPostCard data={post} />
            )}
          </Grid>
        ))}
    </Grid>
  );
};

export default BlogFeed;
