import React, { useState, useEffect, useRef } from "react";
import "./videoPlayer.css";

const VideoPlayer = () => {
  const [opacity, setOpacity] = useState(0);
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const progress = video.currentTime / video.duration;
    setOpacity(progress);
  };

  return (
    <div className="video-container">
      <video
        loop
        ref={videoRef}
        width="600"
        autoPlay
        muted
        onTimeUpdate={handleTimeUpdate}
      >
        <source src="/videos/earth.mp4" type="video/mp4" />
      </video>
      <div className="overlay-text" style={{ opacity }}>
        <h2>Your path to supply chain resilience starts with</h2>
        <h1>Global Healthcare</h1>
      </div>
    </div>
  );
};

export default VideoPlayer;
