import React from "react";
import "./homeTv.css";

function HomeTV() {
  return (
    <div className="tv-container">
      <div className="tv-content">
        <h1 className="d-flex mt-5">Nikmati di TV-mu</h1>
        <p className="d-flex mt-3">
          Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar
          Blu-ray, dan banyak lagi.
        </p>
      </div>
      <div className="tv-image-container">
        <img
          className="tv-image"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt="TV"
        />
        <div className="tv-video">
          <video
            autoPlay
            loop
            muted
            type="video/mp4"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeTV;
