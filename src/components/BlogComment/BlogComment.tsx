import React, { useState, useEffect } from "react";
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
import CommentTextEditor from "../CommentTextEditor";
import { useUpdateBlogCommentMutation } from "../../services/blogCommentsApi";
import { toast } from "react-toastify";

interface Props {
  comment: BlogCommentInterface;
  deleteComment: (comment_id: string) => void;
  postId: string;
}

const BlogComment: React.FC<Props> = ({ comment, deleteComment, postId }) => {
  const classes = useStyles();
  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);
  const [deleteCommentModal, setDeleteCommentModal] = useState(false);
  const [commentEditorOpen, setCommentEditorOpen] = useState(false);

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

  const [
    editComment,
    {
      isLoading: isEditCommentLoading,
      isSuccess: isEditCommentSuccess,
      isError: isEditCommentError,
    },
  ] = useUpdateBlogCommentMutation();

  useEffect(() => {
    if (isEditCommentSuccess) {
      toast("Comment successfully updated", { type: "success" });
      setCommentEditorOpen(false);
    }

    if (isEditCommentError) {
      toast("Something went wrong, please try again", { type: "error" });
    }
  }, [isEditCommentError, isEditCommentSuccess]);

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

  const handleEditComment = () => {
    setCommentEditorOpen(true);
    handleCloseMenu();
  };
  const saveChanges = (data: string) => {
    editComment({
      post_id: postId,
      comment_id: comment.comment_id,
      comment: { body: data },
    });
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
                {user?.username === author && (
                  <MenuItem onClick={handleEditComment}>
                    <ListItemIcon>
                      <EditRounded />
                    </ListItemIcon>
                    Edit
                  </MenuItem>
                )}

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
      {commentEditorOpen && (
        <Box className={classes.commentEditorContainer}>
          <CommentTextEditor
            initialValue={body}
            saveBodyData={saveChanges}
            isLoading={false}
            edit
            cancelEdit={() => setCommentEditorOpen(false)}
          />
        </Box>
      )}
    </>
  );
};

export default BlogComment;
