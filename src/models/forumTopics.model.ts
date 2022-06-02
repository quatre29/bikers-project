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
  author_name?: string;
  author_id?: string;
  author_role?: Role;
  forum_name?: string;
  forum_parent_id?: string;
  forum_parent_name?: string;
  forum_category?: string;
  forum_category_id?: string;
}

export interface Reply {
  reply_id: string;
  author: string;
  quote_body: string;
  body: string;
  created_at: string;
  topic_id: string;
  author_avatar?: string;
  author_id?: string;
  author_role?: Role;
  author_name?: string;
}

export interface ReplyBody {
  body: string;
  topic_id: string;
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

export interface TopicRepliesResponse {
  status: "success" | "error" | "fail";
  data: {
    replies: Reply[];
  };
}

export interface TopicReplyResponse {
  data: {
    status: "success" | "error" | "fail";
    data: {
      reply: Reply;
    };
  };
}
