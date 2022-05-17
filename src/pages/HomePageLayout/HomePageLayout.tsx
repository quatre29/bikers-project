import React from "react";
import { Container, Grid } from "@mui/material";
import useStyles from "./styles";
import BlogTopPosts from "../../components/BlogTopPosts";

import QuickLinks from "../../components/QuickLinks";
import { Outlet } from "react-router-dom";

const HomePage: React.FC = () => {
  const classes = useStyles({ color: "red" });

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item md={2} display={{ sm: "none", md: "block" }}>
          <QuickLinks />
        </Grid>
        <Grid item xs={12} md={8}>
          <Outlet />
        </Grid>
        <Grid item md={2}>
          <BlogTopPosts />
          asdsads
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
