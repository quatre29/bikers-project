import React from "react";
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

const App: React.FC = () => {
  return (
    <div className='App'>
      <NavBar />
      <Box
        sx={(theme) => ({
          height: theme.spacing(8),
          width: "100%",
        })}
      ></Box>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/forum' element={<ForumHomePage />} />
        <Route path='/forum/:category' element={<ForumCategoryPage />} />
        <Route
          path='/forum/:category_slug/:forum_slug'
          element={<ForumPage />}
        />

        <Route path='/settings' element={<UserSettings />} />
        <Route path='/my-profile' element={<UserProfile />} />
        <Route path='/blog-post/:id' element={<BlogPost />} />
      </Routes>
    </div>
  );
};

export default App;
