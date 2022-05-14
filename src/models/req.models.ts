export interface BlogPostReq {
  title: string;
  body: string;
  description?: string;
  tags?: string[];
  post_banner?: string;
}

export interface BlogCommentReq {
  post_id: string;
  comment_id?: string;
  comment: { body: string };
}
