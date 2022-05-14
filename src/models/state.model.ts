export interface BlogPostCreation {
  title: string;
  body: string;
  description: string;
  tags: string[];
  post_banner?: string;
}

export interface BlogPostUpdate {
  post_id: string;
  body: BlogPostCreation;
}
