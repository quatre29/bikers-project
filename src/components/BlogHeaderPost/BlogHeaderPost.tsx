import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";

interface BlogPost {
  secondary?: boolean;
  image: string;
}

const BlogHeaderPost: React.FC<BlogPost> = ({ secondary, image }) => {
  const classes = useStyles({ image });
  return (
    <Box className={classes.container}>
      <Link to='/blog-post/2344' className={classes.titleLink}>
        <Typography
          color='whitesmoke'
          sx={{
            typography: { xs: "h4", sm: "h3", lg: secondary ? "h4" : "h2" },
          }}
        >
          This is a title For this blog post
        </Typography>
      </Link>
    </Box>
  );
};

export default BlogHeaderPost;
