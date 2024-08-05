import "./homePage.css";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import HomeChildren from "../components/HomeChildren";
import HomeOffline from "../components/HomeOffline";
import HomeTV from "../components/HomeTV";
import HomeWatching from "../components/HomeWatching";
import Line from "../components/Line";
function HomePages() {
  return (
    <div className="home">
      <Header />
      <HomeBanner />
      <Line />
      <HomeTV />
      <Line />
      <HomeOffline />
      <Line />
      <HomeWatching />
      <Line />
      <HomeChildren />
    </div>
  );
}

export default HomePages;
