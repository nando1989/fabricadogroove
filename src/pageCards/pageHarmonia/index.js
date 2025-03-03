// App.js
import React, { useState } from "react";
import Sidebar from "../../componentes/sidebar/sidebar";
import VideoPlayer from "../../componentes/videoPlayer/videoPlayer";
import './style.css';


const videos = [
  { title: "Aula 1 - Introdução", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Aula 2 - Módulos", url: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Aula 3 - Componentes", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

function App() {
  const [currentVideo, setCurrentVideo] = useState(videos[0].url);

  return (
    <div className="container">
      <VideoPlayer videoUrl={currentVideo} />
      <Sidebar videos={videos} setCurrentVideo={setCurrentVideo} />
      
    </div>
  );
}

export default App;