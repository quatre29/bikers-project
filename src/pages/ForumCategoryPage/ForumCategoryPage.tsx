import React from "react";
import { Container, Box } from "@mui/material";
import ForumCategoryCard from "../../components/ForumCategoryCard";
import {
  useGetForumCategoryByIdQuery,
  useGetForumsByCategoryIdQuery,
} from "../../services/forumsApi";
import { useParams } from "react-router-dom";

const ForumCategoryPage: React.FC = () => {
  const { category_id } = useParams();
  const { data, isLoading, isError } = useGetForumCategoryByIdQuery(
    category_id!
  );

  return (
    <Container maxWidth="lg">
      <Box sx={(theme) => ({ marginTop: theme.spacing(8) })}>
        {data && !isLoading && (
          <ForumCategoryCard category={data.data.category} />
        )}
      </Box>
    </Container>
  );
};

export default ForumCategoryPage;
