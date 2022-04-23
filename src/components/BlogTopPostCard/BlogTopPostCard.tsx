import React from "react";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import useStyles from "./styles";
import UserAvatar from "../UserAvatar";
import { Link } from "react-router-dom";
import { BlogPost } from "../../models/response.model";
import moment from "../../utils/momentDate";

interface BlogTopPost {
  data: BlogPost;
}

const BlogTopPostCard: React.FC<BlogTopPost> = ({ data }) => {
  const classes = useStyles({});

  const date = moment(data.created_at);

  return (
    // <Box className={classes.container}>
    //   <Typography
    //     color='whitesmoke'
    //     sx={(theme) => ({
    //       typography: { xs: "h4", sm: "h3", lg: "h4" },
    //       marginBottom: theme.spacing(2),
    //     })}
    //   >
    //     This is a title For this blog post
    //   </Typography>
    //   <Typography color='gray' variant='body2'>
    //     text ever since the 1500s, when an unknown printer took a galley of type
    //     and scrambled it to make a type specimen book. It has survived not only
    //     five centuries, but also the leap into electronic typesetting, remaining
    //     essentially unchanged. It was popularised in
    //   </Typography>
    // </Box>
    <Card className={classes.container} variant="outlined">
      <CardHeader
        avatar={<UserAvatar image={data.author_avatar} />}
        title={
          <Link to={`/blog-post/${data.post_id}`} className={classes.titleLink}>
            <Typography
              // color='whitesmoke'
              variant="h6"
              sx={(theme) => ({
                // typography: { xs: "h4", sm: "h3", lg: "h4" },
                marginBottom: theme.spacing(2),
              })}
            >
              {data.title}
            </Typography>
          </Link>
        }
        subheader={date}
      />
      <CardMedia component="img" height="194" image={data.post_banner} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogTopPostCard;
