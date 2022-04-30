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
