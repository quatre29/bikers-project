import React, { useState, useEffect } from "react";
import {
  Grid,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import {
  BookmarkBorderRounded,
  BookmarkBorderOutlined,
  PushPinOutlined,
  PushPinRounded,
  MoreHorizRounded,
  DeleteForeverRounded,
  FlagRounded,
  EditRounded,
} from "@mui/icons-material";

import useStyles from "./styles";
import {
  useDeleteBlogPostMutation,
  useGetBookmarksByPostQuery,
  usePinBlogPostMutation,
} from "../../services/blogPostApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import ModalConfirmation from "../../components/ModalConfirmation";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface Props {
  postId: string | number | undefined;
  pinned: boolean | undefined;
  author: string | undefined;
}

const BlogPostActionBar: React.FC<Props> = ({ postId, pinned, author }) => {
  const classes = useStyles();
  const [pinnedModal, setPinnedModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();

  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);

  const { data, isLoading, isSuccess } = useGetBookmarksByPostQuery(postId);

  const [
    pinPostQuery,
    { isLoading: isLoadingPinning, isSuccess: isPinningSuccess },
  ] = usePinBlogPostMutation();

  const [
    deleteBlogPost,
    {
      isLoading: isDeletePostLoading,
      isSuccess: isDeletePostSuccess,
      isError: isDeletePostError,
    },
  ] = useDeleteBlogPostMutation();

  useEffect(() => {
    console.log(isDeletePostLoading, isDeletePostSuccess, "====098");
    if (isDeletePostSuccess) {
      toast("Blog post deleted", { type: "success" });
      navigate("/");
    }

    if (isDeletePostError) {
      toast("Something went wrong, please try again", { type: "error" });
    }
  }, [isDeletePostLoading, isDeletePostSuccess, isDeletePostError]);

  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };
  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorMenu(e.currentTarget);
  };

  const pinPost = () => {
    console.log("Post pinned");
    pinPostQuery({ post_id: postId, body: { pinned: !pinned } }).then(
      (data: any) => {
        console.log(isPinningSuccess);
        if (data.data?.status === "success") {
          toast(`Blog post successfully ${!pinned ? "pinned" : "unpinned"}`, {
            type: "success",
          });
        } else {
          toast("Something went wrong, please try again", { type: "error" });
        }
        setPinnedModal(false);
      }
    );
  };

  const deletePost = () => {
    console.log("DeLETE");
    deleteBlogPost(postId);
    setDeleteModal(false);
  };
  const openDeleteModal = () => {
    setDeleteModal(true);
    handleCloseMenu();
  };

  const pinIcon = pinned ? <PushPinRounded /> : <PushPinOutlined />;

  return (
    <>
      <ModalConfirmation
        open={pinnedModal}
        title={`Are you sure you want to ${
          !pinned ? "pin" : "unpin"
        } this post?`}
        handleAgree={pinPost}
        handleClose={() => setPinnedModal(false)}
        loading={isLoadingPinning}
      />
      <ModalConfirmation
        open={deleteModal}
        title={"Are you sure you want to delete this blog post?"}
        handleAgree={deletePost}
        handleClose={() => setDeleteModal(false)}
        // loading={}
      />

      <Grid container className={classes.containerActionBar}>
        <Grid
          item
          xs={12}
          alignItems="center"
          className={classes.itemActionBar}
        >
          <IconButton className={classes.actionBarBookmarkIconButton}>
            <BookmarkBorderOutlined />
          </IconButton>
          {isSuccess ? (
            <Typography variant="body1" className={classes.bookmarksLength}>
              {data.data.bookmarks.length}
            </Typography>
          ) : (
            <Typography variant="body1" className={classes.bookmarksLength}>
              0
            </Typography>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          alignItems="center"
          className={classes.itemActionBar}
        >
          <IconButton
            onClick={() => setPinnedModal(true)}
            className={classes.actionBarPinIconButton}
          >
            {pinIcon}
          </IconButton>
        </Grid>
        <Grid
          item
          xs={12}
          alignItems="center"
          className={classes.itemActionBar}
        >
          <IconButton onClick={handleOpenMenu} className={classes.moreIcon}>
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
              <MenuItem onClick={openDeleteModal}>
                <ListItemIcon>
                  <DeleteForeverRounded />
                </ListItemIcon>
                Remove
              </MenuItem>
            )}
            {user?.username === author && (
              <MenuItem onClick={handleCloseMenu}>
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
      </Grid>
    </>
  );
};

export default BlogPostActionBar;
