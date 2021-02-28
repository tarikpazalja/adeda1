import React from "react";
import "../scss/main.scss";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark py-0 position-absolute w-100 navbar-main">
      <div className="container fixed-top">
        <a className="navbar-brand" href="#">
          Ebus
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ms-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Elektronske karte
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Usluge
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pomoć
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                O nama
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-danger text-nowrap py-2 px-2 rounded text-white text-uppercase ">
          Prijavi Se
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
