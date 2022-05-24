import React, { useEffect } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import ForumCategoryCard from "../../components/ForumCategoryCard";
import { useGetForumCategoriesQuery } from "../../services/forumsApi";
import { toast } from "react-toastify";

const ForumHomePage: React.FC = () => {
  const { data, isLoading, isError } = useGetForumCategoriesQuery();

  useEffect(() => {
    if (isError) {
      toast("Something went wrong, please check connection", {
        type: "warning",
      });
    }
  }, [isError]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={(theme) => ({ marginTop: theme.spacing(4) })}
          >
            Forums
          </Typography>
        </Grid>
        {data &&
          !isLoading &&
          data.data.categories.map((category, i) => (
            <Grid item xs={12} key={`${category.category_id}${i}`}>
              <ForumCategoryCard category={category} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default ForumHomePage;
