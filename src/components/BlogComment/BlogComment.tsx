import React, { useState } from "react";
import {
  Box,
  Grid,
  Menu,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";
import UserAvatar from "../UserAvatar";
import useStyles from "./styles";
import { MoreHorizRounded } from "@mui/icons-material";
import { BlogComment as BlogCommentInterface } from "../../models/response.model";
import moment from "../../utils/momentDate";
interface Props {
  comment: BlogCommentInterface;
}

const BlogComment: React.FC<Props> = ({ comment }) => {
  const classes = useStyles();
  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);

  const {
    author,
    author_avatar,
    body,
    created_at,
    edited,
    comment_id,
    post_id,
  } = comment;

  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };
  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorMenu(e.currentTarget);
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={1} className={classes.avatarContainer}>
        <UserAvatar image={author_avatar} size={{ height: 25, width: 25 }} />
      </Grid>
      <Grid item xs={11}>
        <Grid container className={classes.commentContainer}>
          <Grid item xs={6} className={classes.userDetails}>
            <Typography variant="body2" className={classes.username}>
              {author}
            </Typography>
            •
            <Typography variant="body2" className={classes.date}>
              {moment(created_at)}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.options}>
            <IconButton
              size="small"
              aria-label="more"
              id="long-button"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleOpenMenu}
            >
              <MoreHorizRounded />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorMenu)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={() => console.log("Remove")}>Remove</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Report</MenuItem>
              <MenuItem onClick={handleCloseMenu}>No options</MenuItem>
            </Menu>
          </Grid>
          <Box>
            <div>{body}</div>
            {edited && (
              <Box className={classes.editedContainer}>
                <Typography variant="caption" className={classes.edited}>
                  This post was edited
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogComment;
