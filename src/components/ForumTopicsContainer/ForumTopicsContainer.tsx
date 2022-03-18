import React from "react";
import CustomPaper from "../CustomPaper";
import useStyles from "./styles";
import { Box, Grid, Typography } from "@mui/material";
import ForumCategoryCard from "../ForumCategoryCard";
import TopicItem from "./TopicItem";

const ForumTopicsContainer: React.FC = () => {
  const classes = useStyles();
  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing(8) })}>
      <Grid container>
        <Grid item xs={12}>
          <ForumCategoryCard subForumContainer />
        </Grid>
        <Grid item xs={12} sx={(theme) => ({ marginTop: theme.spacing(4) })}>
          <CustomPaper>
            <Grid container>
              <Grid item xs={12}>
                <Grid
                  container
                  sx={(theme) => ({ marginBottom: theme.spacing(2) })}
                >
                  <Grid item xs={5}>
                    <Typography variant='body2' className={classes.text}>
                      Topic Title
                    </Typography>
                  </Grid>
                  <Grid item xs={1} className={classes.textContainer}>
                    <Typography variant='body2' className={classes.text}>
                      Replies
                    </Typography>
                  </Grid>
                  <Grid item xs={1} className={classes.textContainer}>
                    <Typography variant='body2' className={classes.text}>
                      Rate
                    </Typography>
                  </Grid>
                  <Grid item xs={2} className={classes.textContainer}>
                    <Typography variant='body2' className={classes.text}>
                      Author
                    </Typography>
                  </Grid>
                  <Grid item xs={3} className={classes.textContainer}>
                    <Typography variant='body2' className={classes.text}>
                      Last post
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TopicItem pinned />
                <TopicItem pinned />
                <TopicItem />
                <TopicItem />
                <TopicItem />
                <TopicItem />
              </Grid>
            </Grid>
          </CustomPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForumTopicsContainer;
