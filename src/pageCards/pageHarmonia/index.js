// App.js
import React, { useState } from "react";
import Sidebar from "../../componentes/sidebar/sidebar";
import VideoPlayer from "../../componentes/videoPlayer/videoPlayer";
import './style.css';


const videos = [
  { title: "▶️ Aula 1 - Introdução", url: "https://vimeo.com/8260302" },
  { title: "▶️ Aula 2 - Afinação", url: "https://player.vimeo.com/video/987654321" },
  { title: "▶️ Aula 3 - Mapeamento no braço", url: "https://player.vimeo.com/video/456789123" },
  { title: "▶️ Aula 4 - Cifras", url: "https://player.vimeo.com/video/321654987" },
  { title: "▶️ Aula 5 - Tablatura", url: "https://player.vimeo.com/video/147258369" },
  { title: "▶️ Aula 6 - Exercícios práticos", url: "https://player.vimeo.com/video/369258147" },
  { title: "▶️ Aula 7 - Intervalos", url: "https://player.vimeo.com/video/258147369" },
  { title: "▶️ Aula 8 - Escalas", url: "https://player.vimeo.com/video/753951852" },
  { title: "▶️ Aula 9 - Arpejos", url: "https://player.vimeo.com/video/852159753" },
  { title: "▶️ Aula 10 - Arpejos", url: "https://player.vimeo.com/video/654321987" },
  { title: "▶️ Aula 11 - Arpejos", url: "https://player.vimeo.com/video/951753852" },
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