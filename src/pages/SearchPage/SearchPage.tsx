import React, { useState, useEffect } from "react";
import { Container, Typography, useRadioGroup } from "@mui/material";
import TabPanel from "../../components/TabPanel";
import PeopleTab from "./PeopleTab";
import useStyles from "./styles";
import BlogPostsTab from "./BlogPostsTab";
import ForumTopicsTab from "./ForumTopicsTab";
import { useGetUsersBySearchQuery } from "../../services/userApi";
import { useLocation } from "react-router-dom";
import { User } from "../../models/user.model";
import { useGetSearchedBlogPostsQuery } from "../../services/blogPostApi";
import { BlogPost } from "../../models/response.model";

interface CustomizedLocationState {
  searchTerm: string;
}

const SearchPage: React.FC = () => {
  const classes = useStyles();

  const location = useLocation();
  const locationState = location.state as CustomizedLocationState;

  const [users, setUsers] = useState<User[] | []>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[] | []>([]);

  const searchTerm = locationState.searchTerm;

  const {
    data: usersData,
    isLoading: isUsersLoading,
    isSuccess: isUsersSuccess,
  } = useGetUsersBySearchQuery(searchTerm);

  const {
    data: blogPostsData,
    isLoading: isBlogPostsLoading,
    isSuccess: isBlogPostsSuccess,
  } = useGetSearchedBlogPostsQuery(searchTerm);

  useEffect(() => {
    if (usersData && !isUsersLoading && isUsersSuccess) {
      setUsers(usersData.data.users);
    }
  }, [usersData, isUsersLoading, isUsersSuccess]);

  useEffect(() => {
    if (blogPostsData && !isBlogPostsLoading && isBlogPostsSuccess) {
      setBlogPosts(blogPostsData.data.posts);
    }
  }, [blogPostsData, isBlogPostsLoading, isBlogPostsSuccess]);

  const tabs = [
    {
      tabName: "People",
      component: <PeopleTab users={users} isLoading={isUsersLoading} />,
    },
    {
      tabName: "Blog Posts",
      component: (
        <BlogPostsTab posts={blogPosts} isLoading={isBlogPostsLoading} />
      ),
    },
    {
      tabName: "Forum Topics",
      component: <ForumTopicsTab />,
    },
  ];
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography className={classes.title} variant="h4">
        Search results
      </Typography>
      <TabPanel tabs={tabs} tabTitle="Search" />
    </Container>
  );
};

export default SearchPage;
