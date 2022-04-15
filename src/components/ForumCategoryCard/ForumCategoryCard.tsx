import React from "react";
import CustomPaper from "../CustomPaper";
import { Link } from "react-router-dom";
import { Grid, Typography, Divider } from "@mui/material";
import useStyles from "./styles";
import ForumItemCard from "../ForumItemCard";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import DynamicFeedRoundedIcon from "@mui/icons-material/DynamicFeedRounded";

interface Props {
  subForumContainer?: boolean;
}

const ForumCategoryCard: React.FC<Props> = ({ subForumContainer }) => {
  const classes = useStyles();
  return (
    <CustomPaper>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={8} className={classes.forumTextContainer}>
              <ForumRoundedIcon
                fontSize="small"
                className={classes.forumTextIcon}
              />
              <Link to="/forum/category" className={classes.textLink}>
                <Typography variant="body2" className={classes.forumText}>
                  Main Forum
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={1} className={classes.forumItem}>
              <LightbulbRoundedIcon
                fontSize="small"
                className={classes.forumTextIcon}
              />
              <Typography variant="body2" className={classes.forumText}>
                Topics
              </Typography>
            </Grid>
            <Grid item xs={1} className={classes.forumItem}>
              <CommentRoundedIcon
                fontSize="small"
                className={classes.forumTextIcon}
              />
              <Typography variant="body2" className={classes.forumText}>
                Posts
              </Typography>
            </Grid>
            <Grid item xs={2} className={classes.forumItem}>
              <DynamicFeedRoundedIcon
                fontSize="small"
                className={classes.forumTextIcon}
              />
              <Typography variant="body2" className={classes.forumText}>
                Last post
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <ForumItemCard subForumContainer={subForumContainer} />
          <ForumItemCard subForumContainer={subForumContainer} />
          <ForumItemCard subForumContainer={subForumContainer} />
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default ForumCategoryCard;
