import React from "react";
import ForumTopicEditor from "../../components/ForumTopicEditor";
import { useLocation } from "react-router-dom";

interface PropsLocation {
  forumId: string;
  forumName: string;
  categoryId: string;
  categoryName: string;
  parentForumId: string;
  parentForumName: string;
  initialBody: string;
  topicTitle: string;
  topicId: string;
}

const EditForumTopic: React.FC = () => {
  const { state } = useLocation();
  const forumState: PropsLocation = state as PropsLocation;
  return (
    <ForumTopicEditor
      state={forumState}
      edit
      title={forumState.topicTitle}
      body={forumState.initialBody}
    />
  );
};

export default EditForumTopic;
