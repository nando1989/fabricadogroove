// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login/page';
import VisitPage from './visitPage/page';
import Register from './register/page';
import Playlist from './playList/page';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/visitPage" element={<VisitPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/user-playlist" element={<VisitPage/>} /> 
        {/* <Route path="/quizlanding" element={<QuizGender/>} /> 
        <Route path="/quizAge" element={<QuizAge/>}/> 
        <Route path="/quizDificult" element={<QuizDificult/>} /> 
        <Route path="/quizResponseDificult" element={<QuizResponseDificult/>} /> 
        <Route path="/quizTime" element={<QuizTime/>} /> 
        <Route path="/quizInsta" element={<QuizInsta/>} />  */}
      </Routes>
    </Router>
  );
};

export default App;