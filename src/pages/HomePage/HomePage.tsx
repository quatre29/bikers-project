import React from "react";
import BlogHeader from "../../components/BlogHeader";
import { Container, Divider, Grid } from "@mui/material";
import useStyles from "./styles";
import BlogFeed from "../../components/BlogFeed";
import BlogTopPosts from "../../components/BlogTopPosts";
import CustomPaper from "../../components/CustomPaper";

const HomePage: React.FC = () => {
  const classes = useStyles({ color: "red" });
  return (
    <Container maxWidth='lg' className={classes.container}>
      <CustomPaper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BlogHeader />
            <Divider sx={(theme) => ({ marginTop: theme.spacing(4) })} />
          </Grid>
          <Grid item md={8}>
            <BlogFeed />
          </Grid>
          <Grid item md={4}>
            <BlogTopPosts />
          </Grid>
        </Grid>
      </CustomPaper>
    </Container>
  );
};

export default HomePage;
