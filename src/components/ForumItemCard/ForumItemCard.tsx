import React, { useEffect } from "react";
import useStyles from "./styles";
import { Grid, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import SubForumItem from "./SubForumItem";
import ForumTopicItem from "../ForumTopicItem";
import { Forum } from "../../models/forumResponse.model";
import { useGetSubForumsByForumIdQuery } from "../../services/forumsApi";
import { toast } from "react-toastify";

interface Props {
  subForumContainer?: boolean;
  forum: Forum;
}

const ForumItemCard: React.FC<Props> = ({ subForumContainer, forum }) => {
  const classes = useStyles();

  const { data, isLoading, isError } = useGetSubForumsByForumIdQuery(
    forum.forum_id
  );

  useEffect(() => {
    if (isError) {
      toast("Something went wrong, please check connection", { type: "error" });
    }
  }, [isError]);

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
              <Grid item xs={10} className={classes.mainForumText}>
                <Link
                  to={`/forum/${forum.forum_id}`}
                  className={classes.titleLink}
                >
                  <Typography variant="h6" className={classes.forumTitle}>
                    {forum.name}
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
                  {forum.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} className={classes.numericItem}>
            {forum.topics_count}
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
              {data &&
                !isLoading &&
                data.data.forums.map((subForum, i) => (
                  <SubForumItem
                    subForum={subForum}
                    key={`${subForum.forum_id}${i}`}
                  />
                ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default ForumItemCard;
