import React from "react";
import BlogPostMinimalCard from "../../components/BlogPostMinimalCard";
import CustomPaper from "../../components/CustomPaper";
import { useGetMyBookmarksQuery } from "../../services/userApi";

const BookmarksDashboard: React.FC = () => {
  const { data, isLoading, isSuccess } = useGetMyBookmarksQuery();
  return (
    <div>
      <CustomPaper>
        {data &&
          !isLoading &&
          data.data.bookmarks.map((post) => (
            <BlogPostMinimalCard post={post} />
          ))}
      </CustomPaper>
    </div>
  );
};

export default BookmarksDashboard;
