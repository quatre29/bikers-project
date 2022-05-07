import React, { useState } from "react";
import { Typography, InputBase } from "@mui/material";
import { BlogPostCreation } from "../../models/state.model";

interface Props {
  setCreatePostState: React.Dispatch<React.SetStateAction<BlogPostCreation>>;
  createPostState: BlogPostCreation;
}

const AddTag: React.FC<Props> = ({ setCreatePostState, createPostState }) => {
  const [newTag, setNewTag] = useState("");

  const onChangeNewTag = (event: React.ChangeEvent) => {
    setNewTag((event.target as HTMLTextAreaElement).value);
  };

  const handleAddTag = (chip: string) => {
    if (createPostState.tags.length < 4) {
      setCreatePostState({
        ...createPostState,
        tags: [...createPostState.tags, chip.toLowerCase()],
      });

      setNewTag("");
    }
  };

  const handleDeleteTag = (tag: string, index: number) => {
    setCreatePostState({
      ...createPostState,
      tags: createPostState.tags.filter((tag, i) => i !== index),
    });
  };

  return (
    <>
      {createPostState.tags.map((tag, i) => (
        <div key={`${tag}${i}`}>
          <button onClick={() => handleDeleteTag(tag, i)}>X</button>
          <Typography>#{tag}</Typography>
        </div>
      ))}
      <Typography
        component={InputBase}
        placeholder="Add a up to 4 tags..."
        variant="body1"
        fullWidth
        name="newTag"
        autoFocus
        value={newTag}
        onChange={onChangeNewTag}
      />
      <button onClick={() => handleAddTag(newTag)}>Add tag</button>
    </>
  );
};

export default AddTag;
