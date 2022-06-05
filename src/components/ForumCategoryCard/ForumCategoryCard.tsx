import React, { useEffect } from "react";
import CustomPaper from "../CustomPaper";
import { Link } from "react-router-dom";
import { Grid, Typography, Divider, Button } from "@mui/material";
import useStyles from "./styles";
import ForumItemCard from "../ForumItemCard";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import DynamicFeedRoundedIcon from "@mui/icons-material/DynamicFeedRounded";
import { ForumCategory } from "../../models/forumResponse.model";
import { useGetForumsByCategoryIdQuery } from "../../services/forumsApi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

interface Props {
  subForumContainer?: boolean;
  category: ForumCategory;
}

const ForumCategoryCard: React.FC<Props> = ({
  subForumContainer,
  category,
}) => {
  const { category_id } = useParams();
  const classes = useStyles();
  const { data, isLoading, isError } = useGetForumsByCategoryIdQuery(
    category.category_id
  );

  useEffect(() => {
    if (isError) {
      toast("Something went wrong, please check connection", { type: "error" });
    }
  }, [isError]);

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
              {category_id && (
                <>
                  <Link to={`/forum`} className={classes.textLink}>
                    <Typography variant="body2" className={classes.forumText}>
                      Forum
                    </Typography>
                  </Link>
                  <Typography variant="body2" className={classes.linkSeparator}>
                    {">"}
                  </Typography>
                </>
              )}
              {category_id ? (
                <Typography
                  variant="body2"
                  className={classes.forumTextDisabled}
                >
                  {category.name}
                </Typography>
              ) : (
                <Link
                  to={`/forum/category/${category.category_id}`}
                  className={classes.textLink}
                >
                  <Typography variant="body2" className={classes.forumText}>
                    {category.name}
                  </Typography>
                </Link>
              )}
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
          {data &&
            !isLoading &&
            data.data.forums.map((forum, i) => (
              <ForumItemCard
                forum={forum}
                key={`${forum.forum_id}${i}`}
                subForumContainer={subForumContainer}
              />
            ))}
        </Grid>
        <Button
          variant="contained"
          sx={(theme) => ({ marginTop: theme.spacing(4) })}
        >
          New forum
        </Button>
      </Grid>
    </CustomPaper>
  );
};

export default ForumCategoryCard;
