import React from "react";
import BlogPostMinimalCard from "../../components/BlogPostMinimalCard";
import CustomPaper from "../../components/CustomPaper";
import { useGetMyBookmarksQuery } from "../../services/blogPostApi";

const BookmarksDashboard: React.FC = () => {
  const { data, isLoading, isSuccess } = useGetMyBookmarksQuery();
  console.log(data);
  return (
    <div>
      <CustomPaper>
        {data &&
          !isLoading &&
          data.data.bookmarks.map((post, i) => (
            <BlogPostMinimalCard key={`${post.post_id}${i}`} post={post} />
          ))}
      </CustomPaper>
    </div>
  );
};

export default BookmarksDashboard;
