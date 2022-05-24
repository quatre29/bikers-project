import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import BlogPost from "./pages/BlogPost";
import ForumHomePage from "./pages/ForumHomePage";
import HomePageLayout from "./pages/HomePageLayout";
import UserSettings from "./pages/UserSettings";
import { Box } from "@mui/material";
import ForumCategoryPage from "./pages/ForumCategoryPage";
import ForumPage from "./pages/ForumPage";
import ForumTopicPage from "./pages/ForumTopicPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth } from "./hooks/useAuth";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import CreateBlogPost from "./pages/CreateBlogPost";
import EditBlogPost from "./pages/EditBlogPost/EditBlogPost";
import MyProfile from "./pages/MyProfile";
import UserProfile from "./pages/UserProfile";
import TagPage from "./pages/TagPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import UnderConstruction from "./pages/UnderConstruction";
import SearchPage from "./pages/SearchPage/SearchPage";
import ForumPageLayout from "./pages/ForumPageLayout/ForumPageLayout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <PrivateRoute
            allowedRoles={[
              "admin",
              "moderator",
              "member",
              "blogger",
              "developer",
            ]}
          />
        }
      >
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tag/:tag" element={<TagPage />} />
          </Route>

          <Route path="/forum" element={<ForumPageLayout />}>
            <Route path="/forum" element={<ForumHomePage />} />
            <Route
              path="/forum/category/:category_id"
              element={<ForumCategoryPage />}
            />
            <Route path="/forum/:forum_id" element={<ForumPage />} />
            <Route path="/forum/topic/:topic_id" element={<ForumTopicPage />} />
          </Route>

          <Route path="/new-blog" element={<CreateBlogPost />} />
          <Route path="/edit-blog/:post_id" element={<EditBlogPost />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookmarks" element={<UnderConstruction />} />
          <Route path="/events" element={<UnderConstruction />} />
          <Route path="/tags" element={<UnderConstruction />} />
          <Route path="/about" element={<UnderConstruction />} />
          <Route path="/contact" element={<UnderConstruction />} />
          <Route path="/faq" element={<UnderConstruction />} />
          <Route path="/search" element={<SearchPage />} />

          <Route path="/settings" element={<UserSettings />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/user-profile/:user_id" element={<UserProfile />} />

          <Route path="/blog-post/:id" element={<BlogPost />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
