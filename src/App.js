// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componentes/login/page';
import Register from './componentes/register/page';
import Playlist from './componentes/playList/page';
import VisitPage from './componentes/visitPage/page';
import QuizGender from './componentes/pageQuiz/pageGender';
import QuizAge from './componentes/pageQuiz/pageAge';
import QuizDificult from './componentes/pageQuiz/pageDificult';
import QuizResponseDificult from './componentes/pageQuiz/pageVideoDificultResponse';
import QuizTime from './componentes/pageQuiz/pageTime';
import QuizInsta from './componentes/pageQuiz/pageInsta';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VisitPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/visitPage" element={<VisitPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/user-playlist" element={<Login />} /> 
        <Route path="/quizGender" element={<QuizGender />} /> 
        <Route path="/quizAge" element={<QuizAge />} /> 
        <Route path="/quizDificult" element={<QuizDificult />} /> 
        <Route path="/quizResponseDificult" element={<QuizResponseDificult />} /> 
        <Route path="/quizTime" element={<QuizTime/>} /> 
        <Route path="/quizInsta" element={<QuizInsta/>} /> 
      </Routes>
    </Router>
  );
};

export default App;