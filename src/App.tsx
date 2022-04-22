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

const App: React.FC = () => {
  const { user, result } = useAuth();

  // if (result.isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="App">
      {user && <NavBar />}
      <Box
        sx={(theme) => ({
          height: theme.spacing(8),
          width: "100%",
        })}
      ></Box>

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/forum"
          element={
            <PrivateRoute>
              <ForumHomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/forum/:category"
          element={
            <PrivateRoute>
              <ForumCategoryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/forum/:category_slug/:forum_slug"
          element={
            <PrivateRoute>
              <ForumPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/forum/:category_slug/:forum_slug/:topic_id"
          element={
            <PrivateRoute>
              <ForumTopicPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <UserSettings />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/blog-post/:id"
          element={
            <PrivateRoute>
              <BlogPost />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
