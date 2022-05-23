import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { BlogPost } from "../../models/response.model";
import cloudinary from "../../utils/cloudinary";
import {
  AdvancedImage,
  responsive,
  accessibility,
  lazyload,
  placeholder,
} from "@cloudinary/react";
import { scale, fill, crop } from "@cloudinary/url-gen/actions/resize";

interface BlogPostProps {
  secondary?: boolean;
  data: BlogPost;
}

const BlogHeaderPost: React.FC<BlogPostProps> = ({ secondary, data }) => {
  const classes = useStyles({ image: data.post_banner });
  const img = cloudinary.image(data.post_banner);
  img.resize(scale().width(900));

  return (
    <Box className={classes.container}>
      <AdvancedImage cldImg={img} plugins={[accessibility()]} />
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
