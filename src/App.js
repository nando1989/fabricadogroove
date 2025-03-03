// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login/page';
import VisitPage from './visitPage/page';
import Register from './register/page';
import Playlist from './playList/page';
import PageHarmonia from './pageCards/pageHarmonia';
import PageAcordes from './pageCards/pageAcordes';
import PageArpejos from './pageCards/pageArpejos';
import PageSlap from './pageCards/pageSlap';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/visitPage" element={<VisitPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/user-playlist" element={<VisitPage/>} /> 
        <Route path="/harmonia" element={<PageHarmonia/>} /> 
        <Route path="/acordes" element={<PageAcordes/>} /> 
        <Route path="/arpejos" element={<PageArpejos/>} /> 
        <Route path="/slap" element={<PageSlap/>} /> 
        
      </Routes>
    </Router>
  );
};

export default App;