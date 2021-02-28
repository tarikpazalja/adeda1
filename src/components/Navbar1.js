import React from "react";
import "../scss/main.scss";

const Navbar1 = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute w-100 "
      id="navbar-main"
    >
      <div class="container ">
        <a class="navbar-brand" href="#">
          EBUS
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Elektronske karte
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Usluge
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Pomoc
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                O nama
              </a>
            </li>
          </ul>
          <div class="d-flex">
            <a class="btn btn-danger text-uppercase" type="button">
              prijavi se
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
