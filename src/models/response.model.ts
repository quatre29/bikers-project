export interface UserResponse {
  status: "success" | "fail";
  data: {
    user: {
      user_id: String;
      username: String;
      avatar: String;
      name: String;
      email: String;
      location: String | null;
      role: "member" | "moderator" | "admin";
      active: Boolean;
    };
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
  author_role: string;
  author_location: string | null;
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
  created_at?: string;
  tags?: string[];
}

export interface BookmarkRes {
  status: string;
  data: {
    post: {
      user_id: string;
      post_id: string;
    };
  };
}

export interface BlogPostBookmarks {
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
