import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import useStyles from "./styles";
import CustomPaper from "../../components/CustomPaper";
import BlogTopPostCard from "../../components/BlogTopPostCard";
import UserAvatar from "../../components/UserAvatar";
import TextForPost from "./TextForPost";
import BlogPostInfo from "../../components/BlogPostInfo";

const images = [
  "https://images.unsplash.com/photo-1646422462528-0a48ac201c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1646425111739-de69fef33bc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80",
  "https://images.unsplash.com/photo-1644907961094-8852aca773d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
];

const BlogPost: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container>
        {/* <Grid item xs={12}>
            <Typography variant='h4' className={classes.title}>
              This is a title for the post
            </Typography>
          </Grid> */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={8} className={classes.postContainer}>
              <CustomPaper>
                <Typography variant="h4" className={classes.title}>
                  This is a title for the post
                </Typography>
                <img src={images[0]} className={classes.banner} />
                <Box className={classes.postDetails}>
                  <Box className={classes.postDetailsCreator}>
                    <UserAvatar />
                    <Typography
                      sx={(theme) => ({ marginLeft: theme.spacing(2) })}
                      variant="body1"
                    >
                      Moderator
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    a month ago
                  </Typography>
                </Box>
                <Box className={classes.postText}>
                  <TextForPost />
                </Box>
              </CustomPaper>
            </Grid>

            <Grid item xs={4}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <BlogPostInfo />
                </Grid>
                <Grid item xs={12}>
                  <BlogTopPostCard image={images[0]} />
                </Grid>
                <Grid item xs={12}>
                  <BlogTopPostCard image={images[1]} />
                </Grid>
                <Grid item xs={12}>
                  <BlogTopPostCard image={images[2]} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPost;
