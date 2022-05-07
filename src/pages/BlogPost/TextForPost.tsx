import React, { useRef } from "react";
import { Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";

interface PostBodyProps {
  body: string;
}

const TextForPost: React.FC<PostBodyProps> = ({ body }) => {
  // const parsedValue = JSON.parse(body);
  // const newBody = { blocks: parsedValue };
  // console.log(body, parsedValue);

  return (
    <Box>
      {/* <ReactMarkdown>{body}</ReactMarkdown> */}
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </Box>
  );
};

export default TextForPost;
