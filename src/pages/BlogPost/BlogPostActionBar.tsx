import React, { useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import {
  BookmarkBorderRounded,
  BookmarkBorderOutlined,
  PushPinOutlined,
  PushPinRounded,
  MoreHorizRounded,
} from "@mui/icons-material";

import useStyles from "./styles";
import {
  useGetBookmarksByPostQuery,
  usePinBlogPostMutation,
} from "../../services/blogPostApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import ModalConfirmation from "../../components/ModalConfirmation";
import { toast } from "react-toastify";

interface Props {
  postId: string | number | undefined;
  pinned: boolean | undefined;
}

const BlogPostActionBar: React.FC<Props> = ({ postId, pinned }) => {
  const classes = useStyles();
  const [pinnedModal, setPinnedModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const { data, isLoading, isSuccess } = useGetBookmarksByPostQuery(postId);

  const [
    pinPostQuery,
    { isLoading: isLoadingPinning, isSuccess: isPinningSuccess },
  ] = usePinBlogPostMutation();

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

  const pinIcon = pinned ? <PushPinRounded /> : <PushPinOutlined />;

  return (
    <>
      <ModalConfirmation
        open={pinnedModal}
        title="Are you sure you want to pin this post?"
        handleAgree={pinPost}
        handleClose={() => setPinnedModal(false)}
        loading={isLoadingPinning}
      />
      {/* <ModalConfirmation />
      <ModalConfirmation /> */}

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
            0
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
          <IconButton>
            <MoreHorizRounded />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default BlogPostActionBar;
