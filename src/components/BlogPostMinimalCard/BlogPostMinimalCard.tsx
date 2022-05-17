import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import UserAvatar from "../UserAvatar";
import TagItem from "../TagItem";
import { Link } from "react-router-dom";
import { Bookmark } from "../../models/response.model";
import useStyles from "./styles";

interface Props {
  post: Bookmark;
}

const BlogPostMinimalCard: React.FC<Props> = ({ post }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={2} sm={1}>
        <UserAvatar />
      </Grid>
      <Grid item xs={10} sm={11}>
        <Link to={`/blog-post/${post.post_id}`} className={classes.titleLink}>
          <Typography className={classes.title} variant="h5">
            {post.title}
          </Typography>
        </Link>
        <Box className={classes.content}>
          <Link
            className={classes.authorLink}
            to={`/user-profile/${post.user_id}`}
          >
            <Typography className={classes.author} variant="body2">
              {post.author_name}
            </Typography>
          </Link>
          <Typography
            variant="body2"
            sx={(theme) => ({ marginRight: theme.spacing(2) })}
          >
            •
          </Typography>
          {post.tags?.map((tag) => (
            <TagItem tag={tag} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default BlogPostMinimalCard;
