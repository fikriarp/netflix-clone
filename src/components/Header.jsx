import { useEffect } from "react";
import "./header.css";

function Header() {
  return (
    <header className="topNav bg-gradient-black-transparent position-absolute w-100 z-1">
      <nav className="navbar navbar-dark">
        <div
          className="d-flex justify-content-around
align-items-center w-100"
        >
          <a className="nav__logo" href="#">
            <img
              className="netfilx_logo"
              src="https://www.freepnglogos.com/uploads/netflix-socks-png-18.png"
            />
          </a>
          <div className="navbar">
            <from className="d-flex gap-3" role="search">
              <select>
                <option>English</option>
                <option>Bahasa Indonesia</option>
              </select>
              <button className="btn btn-danger">Masuk</button>
            </from>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
