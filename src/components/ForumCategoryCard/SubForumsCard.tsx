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
import { Forum, ForumCategory } from "../../models/forumResponse.model";
import {
  useGetForumsByCategoryIdQuery,
  useGetSubForumsByForumIdQuery,
} from "../../services/forumsApi";
import { toast } from "react-toastify";

interface Props {
  subForumContainer?: boolean;
  forumId: string;
  categoryId: string;
  forumName: string;
  categoryName: string;
  parentForumId: string | null;
  parentForumName: string | null;
}

const SubForumsCard: React.FC<Props> = ({
  subForumContainer,
  forumId,
  categoryId,
  categoryName,
  forumName,
  parentForumId,
  parentForumName,
}) => {
  const classes = useStyles();
  const { data, isLoading, isError } = useGetSubForumsByForumIdQuery(forumId);

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
              <Link to="/forum" className={classes.textLink}>
                <Typography variant="body2" className={classes.forumText}>
                  Forum
                </Typography>
              </Link>
              <Typography variant="body2" className={classes.linkSeparator}>
                {">"}
              </Typography>
              <Link
                to={`/forum/category/${categoryId}`}
                className={classes.textLink}
              >
                <Typography variant="body2" className={classes.forumText}>
                  {categoryName}
                </Typography>
              </Link>
              <Typography variant="body2" className={classes.linkSeparator}>
                {">"}
              </Typography>

              {parentForumId ? (
                <Link
                  to={`/forum/${parentForumId}`}
                  className={classes.textLink}
                >
                  <Typography variant="body2" className={classes.forumText}>
                    {parentForumName}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  variant="body2"
                  className={classes.forumTextDisabled}
                >
                  {forumName}
                </Typography>
              )}

              {parentForumId && (
                <>
                  <Typography variant="body2" className={classes.linkSeparator}>
                    {">"}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={classes.forumTextDisabled}
                  >
                    {forumName}
                  </Typography>
                </>
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
        {parentForumId === null && (
          <Button
            sx={(theme) => ({ margin: theme.spacing(4, 0, 0, 0) })}
            variant="contained"
          >
            New sub-forum
          </Button>
        )}
      </Grid>
    </CustomPaper>
  );
};

export default SubForumsCard;
