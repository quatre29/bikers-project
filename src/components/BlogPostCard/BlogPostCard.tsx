import React from "react";
import { Box } from "@mui/material";
import useStyles from "./styles";

const BlogPostCard: React.FC = () => {
  const classes = useStyles();
  return <Box className={classes.container}>BlogPostCard</Box>;
};

export default BlogPostCard;
