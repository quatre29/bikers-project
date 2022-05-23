import { User } from "./user.model";

export interface UserResponse {
  status: "success" | "fail";
  data: {
    user: {
      user_id: string;
      username: string;
      avatar: string;
      name: string;
      email: string;
      location: string | null;
      role: "member" | "moderator" | "admin" | "developer" | "blogger";
      active: boolean;
      description: string;
    };
  };
}

export interface UsersResponse {
  status: "success" | "fail";
  data: {
    users: User[];
  };
}

export interface BlogPost {
  post_id: string | number;
  title: string;
  body: string;
  pinned: boolean;
  author: string;
  post_banner: string;
  tags: string[] | [];
  description: string;
  avg_rating: string | number;
  ratings_count: string | number;
  created_at: Date;
  author_avatar: string;
  comments_count: string | number;
  author_name: string;
  author_role: "member" | "moderator" | "admin" | "developer" | "blogger";
  author_location: string | null;
  author_id: string;
  author_description: string | null;
  bookmarked: boolean;
}

export interface BlogPostsResponse {
  status: "success" | "fail";
  data: {
    posts: BlogPost[];
  };
}

export interface BlogPostResponse {
  status: "success" | "fail";
  data: {
    post: BlogPost;
  };
}

export interface BlogPostRatingResponse {
  status: "success" | "fail";
  data: {
    rating: {
      post_id: string;
      user_id: string;
      rating: number | string;
      created_at: Date;
    };
  };
}

export interface RateBlogPost {
  status: "success" | "fail";
  data: {
    rating: {
      post_id: string;
      user_id: string;
      rating: number | string;
      created_at: Date;
      title: string;
      author: string;
      tags: string[];
    };
  };
}

export interface Bookmark {
  user_id: string;
  post_id: string;
  title?: string;
  author?: string;
  author_name: string;
  author_avatar: string;
  created_at?: string;
  tags?: string[];
}

export interface BlogBookmarksRes {
  status: "success" | "fail";
  data: {
    bookmarks: Bookmark[];
  };
}

export interface BlogComment {
  comment_id: string;
  author: string;
  post_id: string;
  created_at: Date;
  edited: boolean;
  body: string;
  author_avatar?: string;
}

export interface BlogCommentRes {
  status: "success" | "fail";
  data: {
    comment: BlogComment;
  };
}

export interface BlogPostsComments {
  status: "success" | "fail";
  data: {
    comments: BlogComment[];
  };
}
