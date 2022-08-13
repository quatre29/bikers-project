import React, { useState, useEffect } from "react";
import TextEditor from "../TextEditor";
import useStyles from "./styles";
import { Typography, Container, InputBase, Grid } from "@mui/material";
import CustomPaper from "../CustomPaper";
import { Link, useNavigate } from "react-router-dom";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import {
  useCreateNewTopicMutation,
  useEditTopicMutation,
} from "../../services/forumTopicsApi";
import { toast } from "react-toastify";

interface Props {
  edit?: boolean;
  title?: string;
  body?: string;
  state: {
    forumId: string;
    forumName: string;
    categoryId: string;
    categoryName: string;
    parentForumId: string;
    parentForumName: string;
    topicId?: string;
    topicTitle?: string;
  };
}

const ForumTopicEditor: React.FC<Props> = ({
  edit,
  title = "",
  body = "",
  state,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [createTopicState, setCreateTopicState] = useState({
    title,
    body,
  });

  const [createTopic, { isLoading, isSuccess, isError, data }] =
    useCreateNewTopicMutation();

  const [
    editTopic,
    {
      isLoading: isEditLoading,
      isSuccess: isEditSuccess,
      isError: isEditError,
      data: editData,
    },
  ] = useEditTopicMutation();

  useEffect(() => {
    if (isSuccess && data) {
      toast("Successfully created a new topic", { type: "success" });
      navigate(`/forum/topic/${data.data.topic.topic_id}`);
    }

    if (isError) {
      toast("Something went wrong, please try again", { type: "error" });
    }
  }, [isSuccess, isError, data]);

  useEffect(() => {
    if (isEditSuccess && editData) {
      toast("Successfully created a new topic", { type: "success" });
      navigate(`/forum/topic/${editData.data.topic.topic_id}`);
    }

    if (isEditError) {
      toast("Something went wrong, please try again", { type: "error" });
    }
  }, [isEditSuccess, isEditError, editData]);

  const onChange = (event: React.ChangeEvent) => {
    setCreateTopicState({
      ...createTopicState,
      [(event.target as HTMLTextAreaElement).name]: (
        event.target as HTMLTextAreaElement
      ).value,
    });
  };

  const saveBodyData = (data: string) => {
    if (edit) {
      editTopic({
        topicId: state.topicId!,
        body: { title: createTopicState.title, body: data },
      });
    }

    if (!edit) {
      createTopic({
        body: { body: data, title: createTopicState.title },
        forumId: state.forumId,
      });
    }
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <CustomPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} className={classes.forumTextContainer}>
            <ForumRoundedIcon
              fontSize="small"
              className={classes.forumTextIcon}
            />
            <Link to="/forum" className={classes.textLink}>
              <Typography variant="body2" className={classes.forumText}>
                Forum
              </Typography>
            </Link>
            <Typography variant="body2" className={classes.linkSeparator}>
              {">"}
            </Typography>
            <Link
              to={`/forum/category/${state.categoryId}`}
              className={classes.textLink}
            >
              <Typography variant="body2" className={classes.forumText}>
                {state.categoryName}
              </Typography>
            </Link>
            <Typography variant="body2" className={classes.linkSeparator}>
              {">"}
            </Typography>

            {state.parentForumId ? (
              <Link
                to={`/forum/${state.parentForumId}`}
                className={classes.textLink}
              >
                <Typography variant="body2" className={classes.forumText}>
                  {state.parentForumName}
                </Typography>
              </Link>
            ) : (
              <Link to={`/forum/${state.forumId}`} className={classes.textLink}>
                <Typography variant="body2" className={classes.forumText}>
                  {state.forumName}
                </Typography>
              </Link>
            )}

            {state.parentForumId && (
              <>
                <Typography variant="body2" className={classes.linkSeparator}>
                  {">"}
                </Typography>
                <Link
                  to={`/forum/${state.forumId}`}
                  className={classes.textLink}
                >
                  <Typography variant="body2" className={classes.forumText}>
                    {state.forumName}
                  </Typography>
                </Link>
              </>
            )}

            {edit && (
              <>
                <Typography variant="body2" className={classes.linkSeparator}>
                  {">"}
                </Typography>
                <Link
                  to={`/forum/topic/${state.topicId}`}
                  className={classes.textLink}
                >
                  <Typography variant="body2" className={classes.forumText}>
                    {state.topicTitle}
                  </Typography>
                </Link>
              </>
            )}

            <Typography variant="body2" className={classes.linkSeparator}>
              {">"}
            </Typography>

            <Typography variant="body2" className={classes.forumTextDisabled}>
              {edit ? "Edit Topic" : "New Topic"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              component={InputBase}
              placeholder="Title..."
              value={createTopicState.title}
              onChange={onChange}
              name="title"
              fullWidth
              autoFocus
              multiline
              sx={{ fontWeight: "bold" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextEditor
              edit={edit}
              isLoading={isLoading}
              saveBodyData={saveBodyData}
              initialValue={body}
            />
          </Grid>
        </Grid>
      </CustomPaper>
    </Container>
  );
};

export default ForumTopicEditor;
