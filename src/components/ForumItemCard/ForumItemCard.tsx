import React from "react";
import useStyles from "./styles";
import { Grid, Typography, Divider } from "@mui/material";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import SubForumItem from "./SubForumItem";
import ForumTopicItem from "../ForumTopicItem";

const ForumItemCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Divider className={classes.divider} />
        <Grid container>
          <Grid item xs={8} className={classes.mainForumContainer}>
            <Grid container>
              <Grid xs={1} item className={classes.iconContainer}>
                <LocalPostOfficeIcon fontSize='large' />
              </Grid>
              <Grid item className={classes.mainForumText}>
                <Typography variant='h6'>
                  This is title for this forum
                </Typography>
                <Typography variant='body1'>
                  This is a short description of the forum
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} className={classes.numericItem}>
            7
          </Grid>
          <Grid item xs={1} className={classes.numericItem}>
            14
          </Grid>
          <Grid item xs={2} className={classes.lastPostContainer}>
            <ForumTopicItem />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={1}></Grid>

          <Grid item>
            <SubForumItem />
            <SubForumItem />
            <SubForumItem />
            <SubForumItem />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ForumItemCard;
