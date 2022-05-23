import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Box, Divider } from "@mui/material";
import useStyles from "./styles";
import CustomPaper from "../../components/CustomPaper";
import UserAvatar from "../../components/UserAvatar";
import TextForPost from "./TextForPost";
import BlogPostInfo from "../../components/BlogPostInfo";
import { useGetBlogPostQuery } from "../../services/blogPostApi";
import { useParams } from "react-router-dom";
import moment from "../../utils/momentDate";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/LoadingSpinner";
import UserInfoCard from "../../components/UserInfoCard";
import TagItem from "../../components/TagItem";
import BlogPostActionBar from "./BlogPostActionBar";
import CommentSection from "../../components/CommentSection";
import BlogDescriptionCard from "./BlogDescriptionCard";
import RoleBadge from "../../components/RoleBadge";
import { Link } from "react-router-dom";
import GoToTop from "../../utils/GoToTop";
import BlogPostBanner from "./BlogPostBanner";

const BlogPost: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams();

  const { data, isLoading, isError, isSuccess } = useGetBlogPostQuery(id);

  useEffect(() => {
    if (isError) {
      console.log(isError);
      toast("Something went wrong, please try again", { type: "error" });
    }
  }, [isError]);

  const post = data?.data?.post;

  return (
    <Container maxWidth="xl" className={classes.container}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={0.5}>
                <BlogPostActionBar
                  pinned={post?.pinned}
                  postId={post?.post_id}
                  author={post?.author}
                  post={post!}
                />
              </Grid>
              <Grid item xs={8} className={classes.postContainer}>
                {isLoading && <div>Loading</div>}
                {isError && <div>Something went wrong, please try again</div>}
                {isSuccess && !isLoading && (
                  <CustomPaper>
                    <Typography variant="h4" className={classes.title}>
                      {post?.title}
                    </Typography>
                    {/* {post?.post_banner && (
                      <img src={post?.post_banner} className={classes.banner} />
                    )} */}

                    {post?.post_banner && (
                      <Box className={classes.banner}>
                        <BlogPostBanner publicId={post.post_banner} />
                      </Box>
                    )}
                    <Box className={classes.postDetails}>
                      <Box className={classes.postDetailsCreator}>
                        <UserAvatar image={post?.author_avatar} />
                        <Link
                          className={classes.userLink}
                          to={`/user-profile/${post?.author_id}`}
                        >
                          <Typography
                            sx={(theme) => ({ marginLeft: theme.spacing(2) })}
                            variant="body1"
                          >
                            {post?.author}
                          </Typography>
                        </Link>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {moment(post?.created_at!)}
                      </Typography>
                    </Box>
                    <Box className={classes.tagContainer}>
                      {post?.tags.map((tag, i) => (
                        <Box key={`${tag}${i}`} className={classes.tagItem}>
                          <TagItem tag={tag} />
                        </Box>
                      ))}
                    </Box>
                    <Box className={classes.postText}>
                      <TextForPost body={post?.body!} />
                    </Box>
                    <Box className={classes.commentsContainer}>
                      <Divider />
                      <Typography variant="h5" className={classes.sectionTitle}>
                        Discussions
                      </Typography>
                      <CommentSection
                        userAvatar={post?.author_avatar!}
                        userId={post?.author_id!}
                      />
                    </Box>
                  </CustomPaper>
                )}
              </Grid>

              <Grid item xs={3.5}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <UserInfoCard
                      user={{
                        username: post?.author,
                        avatar: post?.author_avatar,
                        location: post?.author_location,
                        name: post?.author_name,
                        role: post?.author_role,
                        description: post?.author_description,
                        user_id: post?.author_id!,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <RoleBadge role={post?.author_role!} />
                  </Grid>
                  {post?.description && (
                    <Grid item xs={12}>
                      <BlogDescriptionCard description={post.description} />
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    {isSuccess && <BlogPostInfo data={post} />}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
      <GoToTop />
    </Container>
  );
};

export default BlogPost;
