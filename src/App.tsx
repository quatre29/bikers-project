import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ForumHomePage from "./pages/ForumHomePage";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import UserSettings from "./pages/UserSettings";

const App: React.FC = () => {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path='/forum' element={<ForumHomePage />} />
      </Routes>
      <Routes>
        <Route path='/settings' element={<UserSettings />} />
      </Routes>
      <Routes>
        <Route path='/my-profile' element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default App;
