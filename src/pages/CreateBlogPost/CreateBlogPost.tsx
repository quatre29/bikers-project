import React, { useState, useEffect } from "react";
import { Typography, Container, InputBase, Grid } from "@mui/material";
import useStyles from "./styles";
import CustomPaper from "../../components/CustomPaper";
import ChipInput from "material-ui-chip-input";
import { BlogPostCreation } from "../../models/state.model";
import TextEditor from "../../components/TextEditor";
import { useCreateBlogPostMutation } from "../../services/blogPostApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateBlogPost: React.FC = () => {
  const classes = useStyles();
  const [createPostState, setCreatePostState] = useState<BlogPostCreation>({
    title: "",
    body: "",
    description: "",
    tags: ["default"],
    // post_banner: "",
  });
  const [postSent, setPostSent] = useState(false);
  const navigate = useNavigate();

  const [createPost, { isLoading }] = useCreateBlogPostMutation();

  useEffect(() => {
    if (postSent && createPostState.body.length > 0) {
      createPost(createPostState).then((data: any) => {
        console.log(data);
        if (data.data.status === "success") {
          toast("Successfully rated this post", { type: "success" });
          navigate(`/blog-post/${data.data.data.post.post_id}`);
        }

        if (data.data.status === "fail") {
          toast("Something went wrong, please try again", { type: "error" });
        }
      });
    }
  }, [postSent, createPostState.body]);

  const onChange = (event: React.ChangeEvent) => {
    setCreatePostState({
      ...createPostState,
      [(event.target as HTMLTextAreaElement).name]: (
        event.target as HTMLTextAreaElement
      ).value,
    });
  };

  // const handleAddChip = (chip: string) => {
  //   setCreatePostState({
  //     ...createPostState,
  //     tags: [...createPostState.tags, chip.toLowerCase()],
  //   });
  // };
  // const handleDeleteChip = (chip: string, index: number) => {
  //   setCreatePostState({
  //     ...createPostState,
  //     tags: createPostState.tags.filter((chip, i) => i !== index),
  //   });
  // };

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
          {/* <Grid item xs={12}>
            <div>
              <ChipInput
                placeholder="Add up to 4 tags..."
                value={createPostState.tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip, index) => handleDeleteChip(chip, index)}
                disableUnderline
                newChipKeyCodes={[32]}
              />
            </div>
          </Grid> */}
          <Grid item xs={12}>
            <TextEditor isLoading={isLoading} saveBodyData={saveBodyData} />
          </Grid>
        </Grid>
      </CustomPaper>
    </Container>
  );
};

export default CreateBlogPost;
