import React, { useState, useRef, useEffect } from "react";
import useStyles from "./styles";
import {
  Grid,
  Box,
  Divider,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import UserAvatar from "../../components/UserAvatar";
import { Reply, Role, Topic } from "../../models/forumTopics.model";
import * as moment from "moment";
import RoleBadge from "../../components/RoleBadge";
import {
  MoreHorizRounded,
  DeleteForeverRounded,
  FlagRounded,
  EditRounded,
} from "@mui/icons-material";
import TopicTextEditor from "./TopicTextEditor";
import { edit } from "@cloudinary/url-gen/actions/animated";
import {
  useDeleteReplyMutation,
  useEditReplyMutation,
} from "../../services/forumTopicsApi";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import ModalConfirmation from "../../components/ModalConfirmation";

interface Props {
  topicPost?: Topic;
  date: string;
  author_username: string;
  author_name: string;
  role: Role;
  avatar: string;
  body: string;
  replyPost?: Reply;
  author_id: string;
}

const ReplyTopic: React.FC<Props> = ({
  topicPost,
  date,
  author_username,
  author_name,
  role,
  avatar,
  body,
  replyPost,
  author_id,
}) => {
  const classes = useStyles();
  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);
  const [openEditor, setOpenEditor] = useState(false);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const editorRef = useRef<HTMLElement>(null);
  const { user } = useAuth();

  const [editReply, { isLoading, isSuccess, isError }] = useEditReplyMutation();
  const [
    deleteReply,
    {
      isLoading: isDeleteLoading,
      isSuccess: isDeleteSuccess,
      isError: isDeleteError,
    },
  ] = useDeleteReplyMutation();

  useEffect(() => {
    if (openEditor) {
      window.scrollTo({
        top: editorRef.current?.offsetTop!,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [openEditor]);

  useEffect(() => {
    if (isDeleteSuccess) {
      toast("Reply successfully deleted", { type: "success" });
    }
    if (isDeleteError) {
      toast("Something went wrong, please try again", { type: "error" });
    }
  }, [isDeleteSuccess, isDeleteError]);

  useEffect(() => {
    if (isSuccess) {
      toast("Reply successfully edited", { type: "success" });
    }
    if (isError) {
      toast("Something went wrong, please try again", { type: "error" });
    }
  }, [isSuccess, isError]);

  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };
  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorMenu(e.currentTarget);
  };

  const handleOpenEditor = () => {
    setOpenEditor(true);
    handleCloseMenu();
  };

  const cancelEdit = () => {
    setOpenEditor(false);
  };

  const saveEditChanges = (data: string) => {
    editReply({ body: data, reply_id: replyPost?.reply_id! });
    setOpenEditor(false);
  };

  const deleteReplyAction = () => {
    deleteReply(replyPost?.reply_id!);
  };

  const handleOpenDeleteModal = () => {
    setDeleteConfirmationModal(true);
    handleCloseMenu();
  };

  return (
    <Box className={classes.replyContainer}>
      <Box>
        <Divider />
        <Typography variant="body2" className={classes.replyDate}>
          {moment.parseZone(date).format("LL")}
        </Typography>

        <Divider />
      </Box>
      <Grid container>
        <Grid item xs={3}>
          <Box className={classes.replyUserContainer}>
            <UserAvatar
              online
              variant="rounded"
              size={{ width: 150, height: 200 }}
              image={avatar}
            />
            <Typography
              variant="h6"
              color="primary"
              sx={(theme) => ({
                fontWeight: "bold",
                marginTop: theme.spacing(2),
              })}
            >
              {author_name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              @{author_username}
            </Typography>

            <RoleBadge role={role} size="xs" />
          </Box>
        </Grid>
        <Grid item xs={9} className={classes.replyTextContainer}>
          <Box className={classes.replyHeaderContainer}>
            {topicPost && (
              <Box className={classes.replyTitleContainer}>
                <Typography color="primary" variant="h6">
                  {topicPost.title}
                </Typography>
              </Box>
            )}
            <Box className={classes.editMenuContainer}>
              <IconButton onClick={handleOpenMenu}>
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
                {user?.user_id === author_id && (
                  <MenuItem onClick={handleOpenDeleteModal}>
                    <ListItemIcon>
                      <DeleteForeverRounded />
                    </ListItemIcon>
                    Remove
                  </MenuItem>
                )}

                {user?.user_id === author_id && (
                  <MenuItem onClick={handleOpenEditor}>
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
            </Box>
          </Box>
          <Divider className={classes.titleDivider} />

          <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </Grid>
      </Grid>
      <Box>
        <Divider />

        <Typography className={classes.replyQuote} variant="body2">
          Quote
        </Typography>

        <Divider />
        {openEditor && (
          <Box
            ref={editorRef}
            sx={(theme) => ({ margin: theme.spacing(2, 0, 2, 0) })}
          >
            <TopicTextEditor
              saveBodyData={saveEditChanges}
              initialValue={body}
              edit
              isLoading={false}
              cancelEdit={cancelEdit}
            />
          </Box>
        )}
      </Box>
      <ModalConfirmation
        open={deleteConfirmationModal}
        title="Are you sure you want to delete this reply?"
        handleAgree={deleteReplyAction}
        loading={isDeleteLoading}
        handleClose={() => setDeleteConfirmationModal(false)}
      />
    </Box>
  );
};

export default ReplyTopic;
