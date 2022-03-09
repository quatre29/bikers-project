import React from "react";
import CustomPaper from "../CustomPaper";
import { Grid, Typography, Divider } from "@mui/material";
import useStyles from "./styles";
import ForumItemCard from "../ForumItemCard";

const ForumCategoryCard: React.FC = () => {
  const classes = useStyles();
  return (
    <CustomPaper>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={8}>
              <Typography>Main Forum</Typography>
            </Grid>
            <Grid item xs={1} className={classes.forumItem}>
              <Typography>Topics</Typography>
            </Grid>
            <Grid item xs={1} className={classes.forumItem}>
              <Typography>Posts</Typography>
            </Grid>
            <Grid item xs={2} className={classes.forumItem}>
              <Typography>Last post</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <ForumItemCard />
          <ForumItemCard />
          <ForumItemCard />
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default ForumCategoryCard;
