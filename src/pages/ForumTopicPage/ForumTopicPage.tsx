import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Box,
  Grid,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import CustomPaper from "../../components/CustomPaper";
import useStyles from "./styles";
import ReplyTopic from "./ReplyTopic";
import {
  useAddNewReplyMutation,
  useGetTopicByIdQuery,
  useGetTopicRepliesQuery,
} from "../../services/forumTopicsApi";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import AddNewReply from "./AddNewReply";
import TopicTextEditor from "./TopicTextEditor";

const ForumTopicPage: React.FC = () => {
  const classes = useStyles();
  const { topic_id } = useParams();
  const { data, isLoading, isError } = useGetTopicByIdQuery(topic_id!);

  const [editorOpen, setEditorOpen] = useState(false);

  const editorRef = useRef<HTMLElement>(null);

  const [
    addReply,
    {
      isLoading: isAddReplyLoading,
      isError: isAddReplyError,
      isSuccess: isAddReplySuccess,
    },
  ] = useAddNewReplyMutation();

  const {
    data: repliesData,
    isLoading: isRepliesLoading,
    isError: isRepliesError,
  } = useGetTopicRepliesQuery(topic_id!);

  useEffect(() => {
    if (isAddReplyError) {
      toast("Something went wrong, please try again", {
        type: "error",
      });
    }

    if (isAddReplySuccess) {
      toast("Successfully added a new reply", {
        type: "success",
      });
    }
  }, [isAddReplyError, isAddReplySuccess]);

  useEffect(() => {
    if (isError || isRepliesError) {
      toast("Something went wrong, please check your connection", {
        type: "error",
      });
    }
  }, [isError, isRepliesError]);

  useEffect(() => {
    if (editorOpen) {
      window.scrollTo({
        top: editorRef.current?.offsetTop!,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [editorOpen]);

  const openReplyEditor = () => {
    setEditorOpen(true);
  };

  const postNewReply = (data: string) => {
    addReply({ body: data, topic_id: topic_id! });
    setEditorOpen(false);
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <CustomPaper>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={(theme) => ({ marginBottom: theme.spacing(3) })}
          >
            <Grid container>
              <Grid item xs={8} className={classes.linkAddressContainer}>
                {data && !isLoading && (
                  <>
                    <Link to="/forum" className={classes.textLink}>
                      <Typography variant="body2" className={classes.forumText}>
                        Forum
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      className={classes.linkSeparator}
                    >
                      {">"}
                    </Typography>
                    <Link
                      to={`/forum/category/${data.data.topic.forum_category_id}`}
                      className={classes.textLink}
                    >
                      <Typography variant="body2" className={classes.forumText}>
                        {data.data.topic.forum_category}
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      className={classes.linkSeparator}
                    >
                      {">"}
                    </Typography>
                    {data.data.topic.forum_parent_id && (
                      <>
                        <Link
                          to={`/forum/${data.data.topic.forum_parent_id}`}
                          className={classes.textLink}
                        >
                          <Typography
                            variant="body2"
                            className={classes.forumText}
                          >
                            {data.data.topic.forum_parent_name}
                          </Typography>
                        </Link>
                        <Typography
                          variant="body2"
                          className={classes.linkSeparator}
                        >
                          {">"}
                        </Typography>
                      </>
                    )}
                    <Link
                      to={`/forum/${data.data.topic.forum_id}`}
                      className={classes.textLink}
                    >
                      <Typography variant="body2" className={classes.forumText}>
                        {data.data.topic.forum_name}
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      className={classes.linkSeparator}
                    >
                      {">"}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={classes.forumTextDisabled}
                    >
                      {data.data.topic.title}
                    </Typography>
                  </>
                )}
              </Grid>
              <Grid item xs={4} className={classes.postPaginationContainer}>
                <Typography variant="body2">1 2 3 ...last</Typography>
              </Grid>
            </Grid>
            <AddNewReply openReplyEditor={openReplyEditor} />
          </Grid>
          <Grid item xs={12}>
            {data && !isLoading && (
              <ReplyTopic
                topicPost={data.data.topic}
                date={data.data.topic.created_at}
                author_username={data.data.topic.author}
                role={data.data.topic.author_role!}
                body={data.data.topic.body}
                avatar={data.data.topic.author_avatar!}
                author_name={data.data.topic.author_name!}
                author_id={data.data.topic.author_id!}
              />
            )}
            {repliesData &&
              !isRepliesLoading &&
              repliesData.data.replies.map((reply, i) => (
                <ReplyTopic
                  key={`${reply.reply_id}${i}`}
                  date={reply.created_at}
                  author_username={reply.author}
                  role={reply.author_role!}
                  avatar={reply.author_avatar!}
                  body={reply.body}
                  replyPost={reply}
                  author_name={reply.author_name!}
                  author_id={reply.author_id!}
                />
              ))}
          </Grid>
        </Grid>
        <Box>
          <Box>
            <AddNewReply openReplyEditor={openReplyEditor} />
          </Box>
          <Box ref={editorRef} className={classes.textEditorContainer}>
            {editorOpen && (
              <TopicTextEditor
                isLoading={isAddReplyLoading}
                saveBodyData={postNewReply}
                cancelEdit={() => setEditorOpen(false)}
                initialValue=""
              />
            )}
          </Box>
        </Box>
      </CustomPaper>
    </Container>
  );
};

export default ForumTopicPage;
