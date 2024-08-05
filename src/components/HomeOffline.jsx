import "./homeOffline.css";

function HomeOffline() {
  return (
    <div className="offline-container pb-5">
      <div className="tv-content container">
        <h1 className="d-flex mt-5">
          Download acara TV untuk menontonnya secara offline
        </h1>
        <p className="d-flex mt-3">
          Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang
          bisa ditonton.
        </p>
      </div>
      <div className="image-container position-relative">
        <img
          className="img-1"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        />
        <div className="download">
          <div className="d-flex align-items-center">
            <img
              className="img-download"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
            />
            <div className="d-flex flex-column align-items-center justify-content-center">
              <p>Stranger Things</p>
              <p className="text-primary">Men-download...</p>
            </div>
            <div className="progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeOffline;
