import React, { useState, useEffect } from "react";
import { Typography, Container, InputBase, Grid } from "@mui/material";
import useStyles from "./styles";
import CustomPaper from "../../components/CustomPaper";
import { BlogPostCreation } from "../../models/state.model";
import TextEditor from "../../components/TextEditor";
import {
  useCreateBlogPostMutation,
  useUpdateBlogPostMutation,
} from "../../services/blogPostApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CKTextEditor from "../../components/TextEditor/CKTextEditor";
import AddTag from "./AddTag";

interface Props {
  title?: string;
  body?: string;
  description?: string;
  tags?: string[];
  edit?: boolean;
  editPostId?: string;
}

const BlogPostEditor: React.FC<Props> = ({
  title = "",
  body = "",
  description = "",
  tags = [],
  edit,
  editPostId,
}) => {
  const classes = useStyles();
  const [createPostState, setCreatePostState] = useState<BlogPostCreation>({
    title,
    body,
    description,
    tags,
    // post_banner: "",
  });
  const [postSent, setPostSent] = useState(false);
  const navigate = useNavigate();

  const [createPost, { isLoading: isPostingLoading }] =
    useCreateBlogPostMutation();
  const [
    updatePost,
    {
      isLoading: isUpdateLoading,
      isSuccess: isUpdateSuccess,
      isError: isUpdateError,
    },
  ] = useUpdateBlogPostMutation();

  useEffect(() => {
    if (isUpdateError) {
      toast("Something went wrong, please try again", { type: "error" });
    }

    if (isUpdateSuccess) {
      toast("Successfully updated this post", { type: "success" });
      navigate(`/blog-post/${editPostId}`, { replace: true });
    }
  }, [isUpdateError, isUpdateSuccess]);

  useEffect(() => {
    // console.log(createPostState, "===========");
    if (postSent && createPostState.body.length > 0 && !edit) {
      createPost(createPostState)
        .then((data: any) => {
          if (data.data?.status === "success") {
            toast("Successfully rated this post", { type: "success" });
            navigate(`/blog-post/${data.data.data.post.post_id}`);
          }

          if (data.error) {
            throw new Error("Something went wrong, please try again");
          }
        })
        .catch((err) => {
          toast("Something went wrong, please try again", { type: "error" });
          setPostSent(false);
        })
        .finally(() => {
          setPostSent(false);
        });
    }

    if (postSent && createPostState.body.length > 0 && edit) {
      updatePost({ post_id: editPostId!, body: createPostState });
      setPostSent(false);
    }
  }, [postSent, createPostState]);

  const onChange = (event: React.ChangeEvent) => {
    setCreatePostState({
      ...createPostState,
      [(event.target as HTMLTextAreaElement).name]: (
        event.target as HTMLTextAreaElement
      ).value,
    });
  };

  const saveBodyData = (data: string) => {
    setCreatePostState((prevState) => ({
      ...prevState,
      body: data,
    }));
    setPostSent(true);
  };

  // const sendNewPost = () => {
  //   createPost(createPostState);
  // };

  const cancelEdit = () => {
    navigate(`/blog-post/${editPostId}`, { replace: true });
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <CustomPaper>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              component={InputBase}
              placeholder="Title..."
              value={createPostState.title}
              onChange={onChange}
              name="title"
              fullWidth
              autoFocus
              multiline
              sx={{ fontWeight: "bold" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              component={InputBase}
              placeholder="Add a description of the post..."
              variant="body1"
              fullWidth
              name="description"
              autoFocus
              multiline
              value={createPostState.description}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <AddTag
              setCreatePostState={setCreatePostState}
              createPostState={createPostState}
            />
          </Grid>
          <Grid item xs={12}>
            <TextEditor
              edit={edit}
              isLoading={isPostingLoading}
              saveBodyData={saveBodyData}
              initialValue={body}
              cancelEdit={cancelEdit}
            />
            {/* <CKTextEditor saveBodyData={saveBodyData} /> */}
          </Grid>
        </Grid>
      </CustomPaper>
    </Container>
  );
};

export default BlogPostEditor;
