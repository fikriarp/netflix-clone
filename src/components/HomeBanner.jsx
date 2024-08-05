import "./homeBanner.css";
import Login from "./Login";

function HomeBanner() {
  return (
    <div>
      <div className="bg position-absolute"></div>
      <div className="homeTitle text-white container ">
        <h1 className="">Film, acara TV tak terbatas, dan banyak lagi</h1>
        <p className="">Tonton di mana pun. Batalkan kapan pun.</p>
        <p>
          Siap menonton? Masukkan email untuk membuat atau memulai lagi
          keanggotaanmu.
        </p>
        <Login />
      </div>
    </div>
  );
}

export default HomeBanner;
