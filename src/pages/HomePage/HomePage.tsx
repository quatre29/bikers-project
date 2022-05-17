import React from "react";
import { Grid, Divider } from "@mui/material";
import BlogHeader from "../../components/BlogHeader";
import BlogFeed from "../../components/BlogFeed";
import {
  useGetAllPinnedBlogPostsQuery,
  useGetAllNormalBlogPostsQuery,
} from "../../services/blogPostApi";
import LoadingSpinner from "../../components/LoadingSpinner";

const HomePage: React.FC = () => {
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
    <>
      {isLoadingPinned && isLoadingNormal ? (
        <LoadingSpinner />
      ) : (
        <>
          <Grid item xs={12}>
            <BlogHeader
              data={dataPinned}
              isError={isErrorPinned}
              isSuccess={isSuccessPinned}
            />
            <Divider sx={(theme) => ({ margin: theme.spacing(2, 0, 2, 0) })} />
          </Grid>
          <Grid item md={12}>
            <BlogFeed
              data={dataNormal}
              isError={isErrorNormal}
              isSuccess={isSuccessNormal}
            />
          </Grid>
        </>
      )}
    </>
  );
};

export default HomePage;
