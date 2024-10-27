import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import Term from './components/Term';
import Signup from './components/Signup';
import PhotoUpload from './components/PhotoUpload';
import PhotoFeedback from './components/PhotoFeedback';
import Learning from './components/Learning';
import CommunityList from './components/CommunityList';
import CommunityPost from './components/CommunityPost';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';
import ChangePassword from './components/ChangePassword';
import ErrorPage from './components/ErrorPage';
import './App.css';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/terms" element={<Term />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/photo/upload" element={<PhotoUpload />} />
        <Route path="/photo/feedback" element={<PhotoFeedback />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/learning/:learningId" element={<Learning />} />
        <Route path="/community" element={<CommunityList />} />
        <Route path="/community/search" element={<CommunityList />} />
        <Route path="/community/:postId" element={<CommunityPost />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/profile/edit" element={<EditProfile />} />
        <Route path="/user/password/change" element={<ChangePassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
