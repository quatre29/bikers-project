import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  Box,
  Typography,
  Badge,
  Hidden,
} from "@mui/material";
import useStyles from "./styles";
import UserAvatar from "../UserAvatar";
import { ChatBubble } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { BlogPost } from "../../models/response.model";
import moment from "../../utils/momentDate";
import TagItem from "../TagItem";

interface BlogPostCardInterface {
  data: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardInterface> = ({ data }) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.container}>
      <Grid container>
        <Grid item xs={1}>
          <UserAvatar image={data.author_avatar} />
        </Grid>
        <Grid xs={11} item className={classes.body}>
          <Link
            className={classes.userLink}
            to={`/user-profile/${data.author_id}`}
          >
            <Typography variant="body1" className={classes.user}>
              {data.author}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {moment(data.created_at)}
          </Typography>

          <Link to={`/blog-post/${data.post_id}`} className={classes.titleLink}>
            <Typography className={classes.title} variant="h4">
              {data.title}
            </Typography>
          </Link>
          <Box className={classes.tags}>
            {data.tags.map((tag, i) => (
              <TagItem key={`${tag}${i}`} tag={tag} />
            ))}
          </Box>
          <Box className={classes.coms}>
            <Badge color="secondary" badgeContent={data.comments_count}>
              <ChatBubble />
            </Badge>
          </Box>
        </Grid>
      </Grid>

      <CardMedia
        component="img"
        sx={{ width: 151, borderRadius: "5px" }}
        image={data.post_banner}
      />
    </Card>
  );
};

export default BlogPostCard;
