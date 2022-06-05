import React from "react";
import useStyles from "./styles";
import { useLocation } from "react-router-dom";
import ForumTopicEditor from "../../components/ForumTopicEditor";
import { StringLiteralLike } from "typescript";

interface PropsLocation {
  forumId: string;
  forumName: string;
  categoryId: string;
  categoryName: string;
  parentForumId: string;
  parentForumName: string;
}

const CreateNewTopic: React.FC = () => {
  const { state } = useLocation();
  const classes = useStyles();
  console.log(state);
  const forumState: PropsLocation = state as PropsLocation;

  return <ForumTopicEditor state={forumState} />;
};

export default CreateNewTopic;
