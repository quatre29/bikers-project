export interface BlogPostReq {
  title: string;
  body: string;
  description?: string;
  tags?: string[];
  post_banner?: string;
}
