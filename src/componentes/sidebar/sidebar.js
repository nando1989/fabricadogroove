import React from "react";
import '../sidebar/style.css';

function Sidebar({ videos, setCurrentVideo }) {
  return (
    <div className="sidebar">
      {videos.map((video, index) => (
        <button key={index} onClick={() => setCurrentVideo(video.url)}>
          {video.title}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;