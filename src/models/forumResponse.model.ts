export interface ForumCategory {
  category_id: string;
  admin_only: boolean;
  name: string;
  created_at: Date;
}

export interface Forum {
  forum_id: string;
  name: string;
  description: string;
  parent_forum_id: string | null;
  parent_forum_name: string | null;
  created_at: Date;
  category_id: string;
  topics_count: string;
  category_name?: string;
}

export interface ForumCategoriesResponse {
  status: "success" | "error" | "fail";
  data: {
    categories: ForumCategory[];
  };
}

export interface ForumsByCategoryResponse {
  status: "success" | "error" | "fail";
  data: {
    forums: Forum[];
  };
}

export interface ForumCategoryResponse {
  status: "success" | "error" | "fail";
  data: {
    category: ForumCategory;
  };
}

export interface ForumResponse {
  status: "success" | "error" | "fail";
  data: {
    forum: Forum;
  };
}
