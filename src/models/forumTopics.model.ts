export type Role = "admin" | "moderator" | "blogger" | "developer" | "member";

export interface Topic {
  topic_id: string;
  title: string;
  forum_id: string;
  created_at: string;
  votes: string;
  author: string;
  pinned: boolean;
  locked: boolean;
  body: string;
  votes_count?: string;
  replies_count?: string;
  author_avatar?: string;
  author_id?: string;
  author_role?: Role;
}

export interface ForumTopicsResponse {
  status: "success" | "error" | "fail";
  data: {
    topics: Topic[];
  };
}

export interface ForumTopicResponse {
  status: "success" | "error" | "fail";
  data: {
    topic: Topic;
  };
}
