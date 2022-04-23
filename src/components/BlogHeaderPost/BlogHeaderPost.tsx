import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { BlogPost } from "../../models/response.model";

interface BlogPostProps {
  secondary?: boolean;
  data: BlogPost;
}

const BlogHeaderPost: React.FC<BlogPostProps> = ({ secondary, data }) => {
  const classes = useStyles({ image: data.post_banner });
  return (
    <Box
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),center url(${data.post_banner})`,
      }}
      className={classes.container}
    >
      <Link to={`/blog-post/${data.post_id}`} className={classes.titleLink}>
        <Typography
          color="white"
          sx={{
            typography: { xs: "h4", sm: "h3", lg: secondary ? "h4" : "h2" },
          }}
        >
          {data.title}
        </Typography>
      </Link>
    </Box>
  );
};

export default BlogHeaderPost;
