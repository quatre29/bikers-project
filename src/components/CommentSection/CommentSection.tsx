import React from "react";
import useStyles from "./styles";
import { Box, Grid } from "@mui/material";
import UserAvatar from "../UserAvatar";
import CommentTextEditor from "../CommentTextEditor";
import BlogComment from "../BlogComment";
import {
  useDeleteBlogCommentMutation,
  useGetBlogPostCommentsQuery,
  usePostBlogCommentMutation,
} from "../../services/blogCommentsApi";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import { toast } from "react-toastify";

interface Props {
  userId: string;
}

const CommentSection: React.FC<Props> = ({ userId }) => {
  const classes = useStyles();
  const { id } = useParams();
  const { data, isLoading } = useGetBlogPostCommentsQuery(id!);

  const [postCommentQuery, { isLoading: isPostingCommentLoading }] =
    usePostBlogCommentMutation();

  const [deleteCommentQuery, { isLoading: isDeleteCommentLoading, isSuccess }] =
    useDeleteBlogCommentMutation();

  const sendComment = (data: string) => {
    console.log(data, "09887");
    postCommentQuery({ post_id: id!, comment: { body: data } }).then(
      (data: any) => {
        if (data.data?.status === "success") {
          toast("Successfully posted a comment", { type: "success" });
        }

        if (data.error) {
          toast("Something went wrong, please try again", {
            type: "error",
          });
        }
      }
    );
  };

  const deleteComment = (comment_id: string) => {
    deleteCommentQuery({ post_id: id!, comment_id }).then((data: any) => {
      if (data.error?.status === 401) {
        toast("You don't have access deleting this comment", {
          type: "warning",
        });
      } else if (data.error) {
        toast("Something went wrong, please try again", {
          type: "error",
        });
      } else {
        toast("Comment successfully deleted", { type: "success" });
      }
    });
  };

  return (
    <Box>
      <Grid container className={classes.container}>
        <Grid item xs={1}>
          <UserAvatar size={{ width: 25, height: 25 }} />
        </Grid>
        <Grid item xs={11}>
          <CommentTextEditor saveBodyData={sendComment} isLoading={false} />
        </Grid>
      </Grid>
      <Box className={classes.comments}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          data?.data.comments.map((comment, i) => (
            <BlogComment
              key={`${i}${comment.comment_id}`}
              comment={comment}
              deleteComment={deleteComment}
              postId={id!}
              userId={userId}
            />
          ))
        )}
      </Box>
    </Box>
  );
};

export default CommentSection;
