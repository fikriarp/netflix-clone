import "./homeWatching.css";

function HomeWatching() {
  return (
    <div className="tv-container">
      <div className="tv-content">
        <h1 className="d-flex mt-5">Tonton di mana pun</h1>
        <p className="d-flex mt-3">
          Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop,
          dan TV-mu.
        </p>
      </div>
      <div className="tv-image-container">
        <img
          className="tv-image"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-id.png"
          alt="TV"
        />
        <div className="tv-video watching">
          <video
            autoPlay
            loop
            muted
            type="video/mp4"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-id.m4v"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeWatching;
