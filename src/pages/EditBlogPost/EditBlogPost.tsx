import React, { useEffect } from "react";
import BlogPostEditor from "../../components/BlogPostEditor";
import { BlogPostCreation } from "../../models/state.model";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { BlogPost } from "../../models/response.model";

const EditBlogPost: React.FC = () => {
  const { post_id } = useParams();
  const location: any = useLocation();
  const navigate = useNavigate();

  const blogPost: BlogPost = location.state.post;

  useEffect(() => {
    if (!location.state?.post) {
      navigate(-1);
    }
  }, []);

  return (
    <>
      <BlogPostEditor
        title={blogPost.title}
        body={blogPost.body}
        description={blogPost.description}
        tags={blogPost.tags}
        post_banner={blogPost.post_banner}
        edit
        editPostId={post_id}
      />
    </>
  );
};

export default EditBlogPost;
