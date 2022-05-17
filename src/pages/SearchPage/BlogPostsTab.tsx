import React from "react";
import BlogPostCard from "../../components/BlogPostCard";
import { BlogPost } from "../../models/response.model";
import { Box } from "@mui/material";

interface Props {
  posts: BlogPost[];
  isLoading: boolean;
}

const BlogPostsTab: React.FC<Props> = ({ posts, isLoading }) => {
  return (
    <div>
      {posts.map((post) => (
        <Box
          sx={(theme) => ({
            marginBottom: theme.spacing(2),
          })}
          key={`${post.author_id}${post.post_id}`}
        >
          <BlogPostCard data={post} />
        </Box>
      ))}
    </div>
  );
};

export default BlogPostsTab;
