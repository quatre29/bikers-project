import React from "react";
import { Typography, Box } from "@mui/material";

interface PostBodyProps {
  body: string;
}

const TextForPost: React.FC<PostBodyProps> = ({ body }) => {
  return (
    <Box>
      <Typography variant="body1">{body}</Typography>
    </Box>
  );
};

export default TextForPost;
