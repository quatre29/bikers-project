import React from "react";
import useStyles from "./styles";
import { Grid, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import SubForumItem from "./SubForumItem";
import ForumTopicItem from "../ForumTopicItem";
interface Props {
  subForumContainer?: boolean;
}

const ForumItemCard: React.FC<Props> = ({ subForumContainer }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Divider className={classes.divider} />
        <Grid container>
          <Grid item xs={8} className={classes.mainForumContainer}>
            <Grid container>
              <Grid xs={1} item className={classes.iconContainer}>
                <LocalPostOfficeIcon fontSize="large" />
              </Grid>
              <Grid item className={classes.mainForumText}>
                <Link
                  to="/forum/category/announcements"
                  className={classes.titleLink}
                >
                  <Typography variant="h6" className={classes.forumTitle}>
                    This is the title of this forum
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
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
      {!subForumContainer && (
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
      )}
    </Grid>
  );
};

export default ForumItemCard;
