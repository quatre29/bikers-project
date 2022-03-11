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

interface BlogTopPost {
  image: string;
  onPost?: boolean;
}

const BlogTopPostCard: React.FC<BlogTopPost> = ({ image, onPost }) => {
  const classes = useStyles({ image, onPost });

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
    <Card className={classes.container} variant='outlined'>
      <CardHeader
        avatar={<UserAvatar />}
        title={
          <Link to='/blog-post/2344' className={classes.titleLink}>
            <Typography
              // color='whitesmoke'
              variant='h6'
              sx={(theme) => ({
                // typography: { xs: "h4", sm: "h3", lg: "h4" },
                marginBottom: theme.spacing(2),
              })}
            >
              This is a title For this blog post
            </Typography>
          </Link>
        }
        subheader='a month ago'
      />
      <CardMedia component='img' height='194' image={image} />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogTopPostCard;
