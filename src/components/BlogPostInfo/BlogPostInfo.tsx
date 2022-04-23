import React, { useState, useEffect } from "react";
import CustomPaper from "../CustomPaper";
import useStyles from "./styles";
import { Box, Typography, Stack, Rating } from "@mui/material";
import { BlogPost, RateBlogPost } from "../../models/response.model";
import {
  useGetMyBlogPostRatingQuery,
  useRateBlogPostMutation,
} from "../../services/blogPostApi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface Props {
  data: BlogPost | undefined;
}

const BlogPostInfo: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  const { id } = useParams();
  const {
    data: myRatingData,
    isLoading,
    isSuccess,
    refetch,
  } = useGetMyBlogPostRatingQuery(id);

  const [myRating, setMyRating] = useState<number | null>(0);

  const [rateBlogPost] = useRateBlogPostMutation();

  useEffect(() => {
    if (isSuccess && myRatingData.data.rating) {
      setMyRating(+myRatingData.data.rating.rating);
    }
  }, [myRatingData]);

  const rateThisBlogPost = (newValue: number | null) => {
    if (newValue !== null) {
      setMyRating(newValue);

      rateBlogPost({ rating: newValue, postId: id }).then((data: any) => {
        // refetch();
        if (data.data.status === "success") {
          toast("Successfully rated this post", { type: "success" });
        }

        if (data.data.status === "fail") {
          toast("Something went wrong, please try again", { type: "error" });
        }
      });
    }
  };

  return (
    <Box className={classes.container}>
      <CustomPaper>
        <Box className={classes.ratingContainer}>
          <Typography variant="body1">
            Post's ratings ({data?.ratings_count})
          </Typography>
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              size="large"
              defaultValue={+data?.avg_rating!}
              precision={0.5}
              readOnly
            />
          </Stack>
        </Box>

        <Box className={classes.ratingContainer}>
          <Typography variant="body1">
            {myRatingData?.data.rating ? "Your rating" : "Rate this post"}
          </Typography>
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              size="large"
              value={myRating}
              onChange={(event, newValue) => rateThisBlogPost(newValue)}
              precision={1}
            />
          </Stack>
        </Box>
      </CustomPaper>
    </Box>
  );
};

export default BlogPostInfo;
