import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ForumCategoryCard from "../../components/ForumCategoryCard";

const ForumHomePage: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant='h4'>Forums</Typography>
        </Grid>
        <Grid item xs={12}>
          <ForumCategoryCard />
        </Grid>
        <Grid item xs={12}>
          <ForumCategoryCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ForumHomePage;
