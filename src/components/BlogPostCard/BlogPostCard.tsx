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

interface BlogPostCardInterface {
  image: string;
}

const BlogPostCard: React.FC<BlogPostCardInterface> = ({ image }) => {
  const classes = useStyles();
  return (
    <Card variant='outlined' className={classes.container}>
      <Grid container>
        <Grid item xs={1}>
          <UserAvatar />
        </Grid>
        <Grid xs={11} item className={classes.body}>
          <Typography variant='body1' className={classes.user}>
            Moderator
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            a month ago
          </Typography>

          <Link to='/blog-post/2344' className={classes.titleLink}>
            <Typography className={classes.title} variant='h4'>
              This is a title for the post
            </Typography>
          </Link>
          <Box className={classes.tags}>#tag1 tag2</Box>
          <Box className={classes.coms}>
            <Badge color='secondary' badgeContent={3}>
              <ChatBubble />
            </Badge>
          </Box>
        </Grid>
      </Grid>
      <CardMedia
        component='img'
        sx={{ width: 151, borderRadius: "5px" }}
        image={image}
        alt='Live from space album cover'
      />
    </Card>
  );
};

export default BlogPostCard;
