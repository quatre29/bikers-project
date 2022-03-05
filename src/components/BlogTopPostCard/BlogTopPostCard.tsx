import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./styles";

interface BlogTopPost {
  image: string;
}

const BlogTopPostCard: React.FC<BlogTopPost> = ({ image }) => {
  const classes = useStyles({ image });

  return (
    <Box className={classes.container}>
      <Typography
        color='whitesmoke'
        sx={(theme) => ({
          typography: { xs: "h4", sm: "h3", lg: "h4" },
          marginBottom: theme.spacing(2),
        })}
      >
        This is a title For this blog post
      </Typography>
      <Typography color='gray' variant='body2'>
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in
      </Typography>
    </Box>
  );
};

export default BlogTopPostCard;
