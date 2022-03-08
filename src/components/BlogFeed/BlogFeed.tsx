import React from "react";
import { Grid } from "@mui/material";
import BlogPostCard from "../BlogPostCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import BlogTopPostCard from "../BlogTopPostCard";

const BlogFeed: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const images = [
    "https://images.unsplash.com/photo-1646422462528-0a48ac201c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1646425111739-de69fef33bc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80",
    "https://images.unsplash.com/photo-1644907961094-8852aca773d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {matches ? (
          <BlogTopPostCard image={images[0]} />
        ) : (
          <BlogPostCard image={images[0]} />
        )}
      </Grid>
      <Grid item xs={12}>
        {matches ? (
          <BlogTopPostCard image={images[1]} />
        ) : (
          <BlogPostCard image={images[1]} />
        )}
      </Grid>
      <Grid item xs={12}>
        {matches ? (
          <BlogTopPostCard image={images[2]} />
        ) : (
          <BlogPostCard image={images[2]} />
        )}
      </Grid>
      <Grid item xs={12}>
        {matches ? (
          <BlogTopPostCard image={images[1]} />
        ) : (
          <BlogPostCard image={images[1]} />
        )}
      </Grid>
      <Grid item xs={12}>
        {matches ? (
          <BlogTopPostCard image={images[0]} />
        ) : (
          <BlogPostCard image={images[0]} />
        )}
      </Grid>
    </Grid>
  );
};

export default BlogFeed;
