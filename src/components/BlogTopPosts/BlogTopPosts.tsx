import React from "react";
import BlogTopPostCard from "../BlogTopPostCard";
import { Grid } from "@mui/material";

const BlogTopPosts: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1646422462528-0a48ac201c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1646425111739-de69fef33bc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80",
    "https://images.unsplash.com/photo-1644907961094-8852aca773d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  ];
  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={12}>
        <BlogTopPostCard image={images[0]} />
      </Grid>
      <Grid item xs={12}>
        <BlogTopPostCard image={images[1]} />
      </Grid>
      <Grid item xs={12}>
        <BlogTopPostCard image={images[2]} />
      </Grid> */}
    </Grid>
  );
};

export default BlogTopPosts;
