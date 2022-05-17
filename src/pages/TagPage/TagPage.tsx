import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import CustomPaper from "../../components/CustomPaper";
import useStyles from "./styles";
import { useGetBlogPostsByTagQuery } from "../../services/blogPostApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import BlogPostCard from "../../components/BlogPostCard";
import TagItem from "../../components/TagItem";
import GoToTop from "../../utils/GoToTop";

const TagPage: React.FC = () => {
  const classes = useStyles();
  const { tag } = useParams();

  const { data, isLoading } = useGetBlogPostsByTagQuery(tag!);
  if (data?.data.posts.length === 0) return <div>No tag</div>;

  return (
    <Box>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Box className={classes.headerContainer}>
            <CustomPaper>
              <Typography variant="h3">
                <span className={classes.hashtag}>#</span>
                {tag}
              </Typography>
              <Typography
                variant="body2"
                className={classes.tagDescriptionHeader}
              >
                Here you can find only posts that contains the #{tag} tag
              </Typography>
            </CustomPaper>
          </Box>
          <Box className={classes.postsContainer}>
            {data?.data.posts.length === 0 ? (
              <Typography variant="h5">No posts could be found</Typography>
            ) : (
              data?.data.posts.map((post) => (
                <Box
                  className={classes.postContainer}
                  key={`${post.post_id}${post.author}`}
                >
                  <BlogPostCard data={post} />
                </Box>
              ))
            )}
          </Box>
        </>
      )}
      <GoToTop />
    </Box>
  );
};

export default TagPage;
