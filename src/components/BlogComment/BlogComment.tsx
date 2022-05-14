import React, { useState } from "react";
import {
  Box,
  Grid,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  ListItemIcon,
} from "@mui/material";
import UserAvatar from "../UserAvatar";
import useStyles from "./styles";
import {
  MoreHorizRounded,
  DeleteForeverRounded,
  FlagRounded,
  EditRounded,
} from "@mui/icons-material";
import { BlogComment as BlogCommentInterface } from "../../models/response.model";
import moment from "../../utils/momentDate";
import { useAuth } from "../../hooks/useAuth";
import ModalConfirmation from "../ModalConfirmation";

interface Props {
  comment: BlogCommentInterface;
  deleteComment: (comment_id: string) => void;
}

const BlogComment: React.FC<Props> = ({ comment, deleteComment }) => {
  const classes = useStyles();
  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);
  const [deleteCommentModal, setDeleteCommentModal] = useState(false);

  const { user, isLoading } = useAuth();

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

  const cancelModal = () => {
    handleCloseMenu();
    setDeleteCommentModal(false);
  };

  const openDeleteCommentModal = () => {
    handleCloseMenu();
    setDeleteCommentModal(true);
  };

  const removeComment = () => {
    deleteComment(comment_id);
    handleCloseMenu();
  };

  return (
    <>
      <ModalConfirmation
        open={deleteCommentModal}
        title={"Are you sure you want to delete this comment?"}
        handleAgree={removeComment}
        handleClose={cancelModal}
      />
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
                {user?.username === author && (
                  <MenuItem onClick={openDeleteCommentModal}>
                    <ListItemIcon>
                      <DeleteForeverRounded />
                    </ListItemIcon>
                    Remove
                  </MenuItem>
                )}
                <MenuItem onClick={handleCloseMenu}>
                  <ListItemIcon>
                    <EditRounded />
                  </ListItemIcon>
                  Edit
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                  <ListItemIcon>
                    <FlagRounded />
                  </ListItemIcon>
                  Report
                </MenuItem>
              </Menu>
            </Grid>
            <Box>
              <div dangerouslySetInnerHTML={{ __html: body }}></div>
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
    </>
  );
};

export default BlogComment;
