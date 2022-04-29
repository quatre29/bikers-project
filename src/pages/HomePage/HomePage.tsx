import React from "react";
import BlogHeader from "../../components/BlogHeader";
import { Container, Divider, Grid } from "@mui/material";
import useStyles from "./styles";
import BlogFeed from "../../components/BlogFeed";
import BlogTopPosts from "../../components/BlogTopPosts";
import CustomPaper from "../../components/CustomPaper";
import {
  useGetAllPinnedBlogPostsQuery,
  useGetAllNormalBlogPostsQuery,
} from "../../services/blogPostApi";
import LoadingSpinner from "../../components/LoadingSpinner";

const HomePage: React.FC = () => {
  const classes = useStyles({ color: "red" });

  const {
    data: dataPinned,
    isLoading: isLoadingPinned,
    isError: isErrorPinned,
    isSuccess: isSuccessPinned,
  } = useGetAllPinnedBlogPostsQuery();

  const {
    data: dataNormal,
    isLoading: isLoadingNormal,
    isError: isErrorNormal,
    isSuccess: isSuccessNormal,
  } = useGetAllNormalBlogPostsQuery();

  return (
    <Container maxWidth="lg" className={classes.container}>
      {/* <CustomPaper> */}
      {isLoadingPinned && isLoadingNormal ? (
        <LoadingSpinner />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BlogHeader
              data={dataPinned}
              isError={isErrorPinned}
              isSuccess={isSuccessPinned}
            />
            <Divider sx={(theme) => ({ marginTop: theme.spacing(2) })} />
          </Grid>
          <Grid item md={8}>
            <BlogFeed
              data={dataNormal}
              isError={isErrorNormal}
              isSuccess={isSuccessNormal}
            />
          </Grid>
          <Grid item md={4}>
            <BlogTopPosts />
          </Grid>
        </Grid>
      )}

      {/* </CustomPaper> */}
    </Container>
  );
};

export default HomePage;
