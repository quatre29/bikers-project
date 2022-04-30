import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import BlogPost from "./pages/BlogPost";
import ForumHomePage from "./pages/ForumHomePage";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
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

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <PrivateRoute allowedRoles={["member", "admin", "moderator"]} />
        }
      >
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/forum" element={<ForumHomePage />} />
          <Route path="/new-blog" element={<CreateBlogPost />} />
          <Route path="/forum/:category" element={<ForumCategoryPage />} />
          <Route
            path="/forum/:category_slug/:forum_slug"
            element={<ForumPage />}
          />
          <Route
            path="/forum/:category_slug/:forum_slug/:topic_id"
            element={<ForumTopicPage />}
          />

          <Route path="/settings" element={<UserSettings />} />
          <Route path="/my-profile" element={<UserProfile />} />
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
