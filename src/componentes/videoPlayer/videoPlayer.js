import React from "react";
import '../videoPlayer/style.css';

function VideoPlayer({ videoUrl }) {
  return (
    <div className="video-player">
      <video src={videoUrl} controls autoPlay></video>
    </div>
  );
}

export default VideoPlayer;