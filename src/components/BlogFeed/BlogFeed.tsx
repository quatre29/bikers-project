import React from "react";
import { Grid } from "@mui/material";
import BlogPostCard from "../BlogPostCard";

const BlogFeed: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <BlogPostCard />
      </Grid>
      <Grid item xs={12}>
        <BlogPostCard />
      </Grid>
      <Grid item xs={12}>
        <BlogPostCard />
      </Grid>
      <Grid item xs={12}>
        <BlogPostCard />
      </Grid>
      <Grid item xs={12}>
        <BlogPostCard />
      </Grid>
    </Grid>
  );
};

export default BlogFeed;
