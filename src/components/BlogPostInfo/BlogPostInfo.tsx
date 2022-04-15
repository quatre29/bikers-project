import React from "react";
import CustomPaper from "../CustomPaper";
import useStyles from "./styles";
import { Box, Typography, Stack, Rating } from "@mui/material";

const BlogPostInfo: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <CustomPaper>
        <Box className={classes.ratingContainer}>
          <Typography variant="body1">Rate this post</Typography>
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              size="large"
              defaultValue={2}
              precision={1}
            />
          </Stack>
        </Box>
      </CustomPaper>
    </Box>
  );
};

export default BlogPostInfo;
