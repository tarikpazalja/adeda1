import React from "react";
import DownArrow from "../assets/img/down-arrow.png";
import Loupe from "../assets/img/loupe.png";
import Calendar from "../assets/img/calendar.png";
import Bus from "../assets/img/bus.png";
import CreditCard from "../assets/img/credit-card.png";
import MockUpHomePage from "../assets/img/mockup-homepage.png";
import Qr from "../assets/img/Qr-1.png";
import Google from "../assets/img/google1.png";
import Apple from "../assets/img/apple1.png";

const Hero = () => {
  return (
    <div className="tab-content min-vh-100 col-12 p-0" id="app-content">
      <div
        className="tab-pane fade show active"
        id="pill-home"
        role="tabpanel"
        aria-labelledby="pill-home-tab"
      >
        <div id="pill-home-first-part">
          <div className="navbar-space"></div>
          <div className="container">
            <div className="col-12  text-white text-center py-3 p-lg-5">
              <h1 className="h1 mb-2 font-weight-bold">
                Kupite autobusku kartu koristeci eBus!
              </h1>
              <h3 className="font-weight-bolder">
                Izaberite Vasu sljedecu destinaciju
              </h3>
            </div>

            <div className="container pt-1 pb-3">
              <div className="d-lg-flex justify-content-lg-center">
                <div
                  className="align-self-center w-100 d-lg-flex px-5 pr-md-0 py-5 py-md-0 bg-primary bg-md-gray rounded"
                  id="searchForm"
                >
                  <div className="w-100">
                    <ul
                      className="d-none d-md-flex nav nav-pills nav-justified justify-content-md-around my-4"
                      id="search-tabs"
                      role="tablist"
                    >
                      <li className="nav-item m-1">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#medjunarodne-search"
                          id="medjunarodne-search-tab"
                          role="tab"
                          aria-controls="medjunarodne-search"
                          aria-selected="true"
                        >
                          Međunarodne linije
                        </a>
                      </li>
                      <li className="nav-item m-1">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#drzavne-search"
                          role="tab"
                          id="drzavne-search-tab"
                          aria-controls="drzavne-search"
                          aria-selected="false"
                        >
                          Državne linije
                        </a>
                      </li>
                      <li className="nav-item m-1">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#gradske-search"
                          role="tab"
                          id="gradske-search-tab"
                          aria-controls="gradske-search"
                          aria-selected="false"
                        >
                          Prigradske i gradske linije
                        </a>
                      </li>
                    </ul>
                    <div className="d-block d-md-none">
                      <select
                        className="custom-select custom-select-lg mb-4"
                        id="search-tabs-mob"
                      >
                        <option value="0" selected>
                          Međunarodne linije
                        </option>
                        <option value="1">Državne linije</option>
                        <option value="2">Prigradske i gradske linije</option>
                      </select>
                    </div>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="medjunarodne-search"
                        role="tabpanel"
                        aria-labelledby="medjunarodne-search-tab"
                      >
                        <div className="pb-2">
                          <div className="d-lg-flex flex-lg-wrap justify-content-lg-center">
                            <div className="mb-2 mr-lg-2 col-12 col-lg-4 p-0">
                              <input
                                type="text"
                                class="form-control form-control-lg bg-light bg-md-primary text-dark text-md-white input-autocomplete w-100"
                                name="polaziste"
                                id="polazisteMedjunarodne"
                                placeholder="Od"
                                required
                              />
                            </div>
                            <div class="mb-4 mx-lg-2 col-12 col-lg-4 p-0">
                              <input
                                type="text"
                                class="form-control form-control-lg bg-light bg-md-primary text-dark text-md-white input-autocomplete w-100"
                                name="odrediste"
                                id="odredisteMedjunarodne"
                                placeholder="Do"
                                required
                              />
                            </div>
                            <div class="mb-2 mr-lg-2 col-12 col-lg-4 p-0">
                              <input
                                type="text"
                                class="btn btn-lg btn-block bg-light bg-md-primary text-dark text-md-white datepicker-kada text-left"
                                placeholder="Kada"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="d-none d-lg-flex justify-content-center mb-n5">
                          <div
                            className="px-5 rounded-pill"
                            role="group"
                            aria-label="Button group with nested dropdown"
                            style={{
                              backgroundColor: "rgba(200, 200, 200, 0.9)",
                            }}
                          >
                            <div className="btn-group" role="group">
                              <button
                                id="btnGroupDrop1"
                                type="button"
                                className="btn"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Tip karte{" "}
                                <img
                                  src={DownArrow}
                                  className="img-fluid ml-3"
                                  alt=""
                                  width="15"
                                />
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="btnGroupDrop1"
                              >
                                <a className="dropdown-item" href="#">
                                  Jedan smjer
                                </a>
                                <a className="dropdown-item" href="#">
                                  Povratna karta
                                </a>
                              </div>
                            </div>
                            <div className="btn-group" role="group">
                              <button
                                id="btnGroupDrop2"
                                type="button"
                                className="btn"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                1 Putnik/ca{" "}
                                <img
                                  src={DownArrow}
                                  className="img-fluid ml-3"
                                  alt=""
                                  width="15"
                                />
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="btnGroupDrop2"
                              >
                                <a className="dropdown-item" href="#">
                                  Dropdown link
                                </a>
                                <a className="dropdown-item" href="#">
                                  Dropdown link
                                </a>
                              </div>
                            </div>
                            <div className="btn-group" role="group">
                              <button
                                id="btnGroupDrop3"
                                type="button"
                                className="btn"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Dodatni prtljag{" "}
                                <img
                                  src={DownArrow}
                                  className="img-fluid ml-3"
                                  alt=""
                                  width="15"
                                />
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="btnGroupDrop3"
                              >
                                <a className="dropdown-item" href="#">
                                  Dropdown link
                                </a>
                                <a className="dropdown-item" href="#">
                                  Dropdown link
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade show"
                        id="drzavne-search"
                        role="tabpanel"
                        aria-labelledby="drzavne-search-tab"
                      >
                        {/* <div className="pb-4">-----------------------------
                          <div className="d-lg-flex flex-lg-wrap justify-content-lg-center">
                            <div class="mb-2 mr-lg-2 col-12 col-lg-3 p-0">
                              <select
                                className="custom-select custom-select-lg bg-light bg-md-primary text-dark text-md-white rounded"
                                name="tipKarte"
                              >
                                <option selected>Tip karte</option>
                              </select>
                            </div>
                            <div className="mb-2 mx-lg-2 col-12 col-lg-4 p-0">
                              <input
                                type="text"
                                className="form-control form-control-lg bg-light bg-md-primary text-dark text-md-white input-autocomplete w-100"
                                name="polaziste"
                                id="polazisteDrzavne"
                                placeholder="Od"
                                required
                              />
                            </div>
                            <div class="mb-4 ml-lg-2 col-12 col-lg-4 p-0">
                              <input
                                type="text"
                                className="form-control form-control-lg bg-light bg-md-primary text-dark text-md-white input-autocomplete w-100"
                                name="odrediste"
                                id="odredisteDrzavne"
                                placeholder="Do"
                                required
                              />
                            </div>
                          </div>
                          <div class="d-lg-flex flex-lg-wrap justify-content-lg-center">
                            <div class="col-12 col-lg-4 mr-lg-2 p-0 mb-2 mb-lg-0">
                              <input
                                type="text"
                                className="btn btn-lg btn-block bg-light bg-md-primary text-dark text-md-white datepicker-polazak-dolazak text-left"
                                name="vrijemePolaska"
                                placeholder="Vrijeme polaska"
                              />
                            </div>
                            <div class="col-12 col-lg-4 ml-lg-2 p-0 mb-2 mb-lg-0">
                              <input
                                type="text"
                                className="btn btn-lg btn-block bg-light bg-md-primary text-dark text-md-white datepicker-polazak-dolazak text-left"
                                name="vrijemeDolaska"
                                placeholder="Vrijeme Dolaska"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="d-none d-lg-flex justify-content-center mb-n5">
                          <div
                            className="px-5 rounded-pill"
                            role="group"
                            aria-label="Button group with nested dropdown"
                            style={{
                              backgroundColor: " rgba(200, 200, 200, 0.9)",
                            }}
                          >
                            <div className="btn-group" role="group">
                              <button
                                id="btnGroupDrop1"
                                type="button"
                                className="btn"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Tip karte{" "}
                                <img
                                  src={DownArrow}
                                  className="img-fluid ml-3"
                                  alt=""
                                  width="15"
                                />
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="btnGroupDrop1"
                              >
                                <a className="dropdown-item" href="#">
                                  Jedan smjer
                                </a>
                                <a className="dropdown-item" href="#">
                                  Povratna karta
                                </a>
                              </div>
                            </div>
                            <div class="btn-group" role="group">
                              <button
                                id="btnGroupDrop2"
                                type="button"
                                className="btn"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                1 Putnik/ca{" "}
                                <img
                                  src={DownArrow}
                                  className="img-fluid ml-3"
                                  alt=""
                                  width="15"
                                />
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="btnGroupDrop2"
                              >
                                <a className="dropdown-item" href="#">
                                  Dropdown link
                                </a>
                                <a className="dropdown-item" href="#">
                                  Dropdown link
                                </a>
                              </div>
                            </div>
                            <div class="btn-group" role="group">
                              <button
                                id="btnGroupDrop3"
                                type="button"
                                class="btn"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Dodatni prtljag{" "}
                                <img
                                  src={DownArrow}
                                  class="img-fluid ml-3"
                                  alt=""
                                  width="15"
                                />
                              </button>
                              <div
                                class="dropdown-menu"
                                aria-labelledby="btnGroupDrop3"
                              >
                                <a class="dropdown-item" href="#">
                                  Dropdown link
                                </a>
                                <a class="dropdown-item" href="#">
                                  Dropdown link
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>------ */}
                        <div class="pb-2">
                          <div class="d-lg-flex flex-lg-wrap justify-content-lg-center">
                            <div class="mb-2 mr-lg-2 col-12 col-lg-4 p-0">
                              <input
                                type="text"
                                class="form-control form-control-lg bg-light bg-md-primary text-dark text-md-white input-autocomplete w-100"
                                name="polaziste"
                                id="polazisteDrzavne"
                                placeholder="Od"
                                required
                              />
                            </div>
                            <div class="mb-4 mx-lg-2 col-12 col-lg-4 p-0">
                              <input
                                type="text"
                                class="form-control form-control-lg bg-light bg-md-primary text-dark text-md-white input-autocomplete w-100"
                                name="odrediste"
                                id="odredisteDrzavne"
                                placeholder="Do"
                                required
                              />
                            </div>
                            <div class="col-12 col-lg-2 ml-lg-2 p-0 mb-3 mb-lg-0">
                              <input
                                type="text"
                                class="btn btn-lg btn-block bg-light bg-md-primary text-dark text-md-white datepicker-kada text-left"
                                placeholder="Kada"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="d-none d-lg-flex justify-content-center mb-n5">
                          <div
                            class="px-5 rounded-pill"
                            role="group"
                            aria-label="Button group with nested dropdown"
                            style={{
                              backgroundColor: " rgba(200, 200, 200, 0.9)",
                            }}
                          >
                            <div class="btn-group" role="group">
                              <button
                                id="btnGroupDrop1"
                                type="button"
                                class="btn"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Tip karte{" "}
                                <img
                                  src={DownArrow}
                                  class="img-fluid ml-3"
                                  alt=""
                                  width="15"
                                />
                              </button>
                              <div
                                class="dropdown-menu"
                                aria-labelledby="btnGroupDrop1"
                              >
                                <a class="dropdown-item" href="#">
                                  Jedan smjer
                                </a>
                                <a class="dropdown-item" href="#">
                                  Povratna karta
                                </a>
                              </div>
                            </div>
                            <div class="btn-group" role="group">
                              <button
                                id="btnGroupDrop2"
                                type="button"
                                class="btn"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                1 Putnik/ca{" "}
                                <img
                                  src={DownArrow}
                                  class="img-fluid ml-3"
                                  alt=""
                                  width="15"
                                />
                              </button>
                              <div
                                class="dropdown-menu"
                                aria-labelledby="btnGroupDrop2"
                              >
                                <a class="dropdown-item" href="#">
                                  Dropdown link
                                </a>
                                <a class="dropdown-item" href="#">
                                  Dropdown link
                                </a>
                              </div>
                            </div>
                            <div class="btn-group" role="group">
                              <button
                                id="btnGroupDrop3"
                                type="button"
                                class="btn"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Dodatni prtljag{" "}
                                <img
                                  src={DownArrow}
                                  class="img-fluid ml-3"
                                  alt=""
                                  width="15"
                                />
                              </button>
                              <div
                                class="dropdown-menu"
                                aria-labelledby="btnGroupDrop3"
                              >
                                <a class="dropdown-item" href="#">
                                  Dropdown link
                                </a>
                                <a class="dropdown-item" href="#">
                                  Dropdown link
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade show mt-n3"
                        id="gradske-search"
                        role="tabpanel"
                        aria-labelledby="gradske-search-tab"
                      >
                        <div class="d-lg-flex justify-content-lg-center col-12 p-0 mb-1 text-white text-md-dark">
                          <div class="form-check d-flex justify-content-start justify-content-lg-center align-items-center col-12 col-lg-auto p-0 mx-1">
                            <label class="checkbox-container">
                              Pretraga po linijama
                              <input
                                type="radio"
                                checked="checked"
                                name="nacinPretrage"
                                id="pretragaPolinijama"
                                onclick="gradskePretrageOptions(this.value)"
                                value="0"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                          <div class="form-check d-flex justify-content-start justify-content-lg-center align-items-center col-12 col-lg-auto p-0 mx-1">
                            <label class="checkbox-container">
                              Pretraga po početnoj i krajnjoj stanici
                              <input
                                type="radio"
                                name="nacinPretrage"
                                id="pretragaPoStanicama"
                                onclick="gradskePretrageOptions(this.value)"
                                value="1"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </div>
                        <div class="d-flex flex-wrap justify-content-center align-items-center mb-1 w-100">
                          <div class="col-12 col-lg-3 p-0 pb-2 mr-lg-2">
                            <select
                              className="custom-select custom-select-lg bg-light bg-md-primary text-dark text-md-white rounded"
                              name="mjesto"
                              id="gradskeSelectGrad"
                              onchange="gradskePretrageOptions(3)"
                            >
                              <option value="" selected>
                                Za grad
                              </option>
                              <option value="SARAJEVO">Sarajevo</option>
                              <option value="ZENICA">Zenica</option>
                            </select>
                          </div>
                          <div
                            class="d-none justify-content-lg-center col-12 col-lg-8 p-0 ml-lg-2"
                            id="inputGradskihStanica"
                          >
                            <div class="mb-2 col-12 col-lg-6 p-0 mx-1">
                              <input
                                type="text"
                                class="form-control form-control-lg bg-light bg-md-primary text-dark text-md-white input-autocomplete w-100"
                                name="polaziste"
                                id="polazisteGradske"
                                placeholder="Od"
                                required
                              />
                            </div>
                            <div class="mb-2 col-12 col-lg-6 p-0 mx-1">
                              <input
                                type="text"
                                class="form-control form-control-lg bg-light bg-md-primary text-dark text-md-white input-autocomplete w-100"
                                name="odrediste"
                                id="odredisteGradske"
                                placeholder="Do"
                                required
                              />
                            </div>
                          </div>
                          <div
                            class="d-flex justify-content-center col-12 col-lg-6 p-0 mb-1 ml-lg-2"
                            id="selectGradskihLinija"
                          >
                            <select
                              class="custom-select custom-select-lg bg-light bg-md-primary text-dark text-md-white w-100"
                              disabled
                            >
                              <option value="" selected>
                                Odaberite liniju
                              </option>
                              <option>BOLNICA - KANAL</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    class="d-none d-lg-flex btn btn-lg bg-danger rounded-lg col-2 shadow-lg justify-content-center align-items-center search-btn"
                    href="#pill-pregled-linija"
                    data-toggle="pill"
                    role="tab"
                    aria-controls="pill-pregled-linija"
                    aria-selected="true"
                  >
                    <img src={Loupe} class="img-fluid" alt="" width="100" />
                  </a>
                </div>
              </div>
              <a
                class="btn btn-lg btn-danger col-12 shadow-lg d-lg-none bg-danger rounded-lg py-3 search-btn"
                href="#pill-pregled-linija"
                data-toggle="pill"
                role="tab"
                aria-controls="pill-pregled-linija"
                aria-selected="true"
              >
                <span class="text-uppercase h3 font-weight-bolder">
                  Kupi kartu{" "}
                  <img src={Loupe} class="img-fluid" alt="" width="32px" />
                </span>
              </a>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,160L34.3,154.7C68.6,149,137,139,206,160C274.3,181,343,235,411,229.3C480,224,549,160,617,144C685.7,128,754,160,823,181.3C891.4,203,960,213,1029,192C1097.1,171,1166,117,1234,106.7C1302.9,96,1371,128,1406,144L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div class="container d-flex justify-content-center">
          <div class="col-12 col-lg-7 text-center">
            <h1 class="font-weight-bolder mb-4">Izdvojena destinacija: Beč</h1>
            <p class="mb-4">
              Lorem ipsum dolor sit amet, pro prompta eligendi corrumpit an,
              invidunt scribentur dissentiunt eum an, eu legimus appetere
              cotidieque vis.
            </p>
            <button
              class="btn px-5 py-3"
              style={{
                backgroundColor: "#00AEA6",
                color: "white",
                borderRadius: "0.75rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              type="button"
            >
              PROCITAJ VISE
            </button>
          </div>
        </div>

        <div>
          <div class="container">
            <div class="card-slider">
              <div class="col-lg-12">
                <div
                  class="card imageSlider"
                  style={{ backgroundImage: "url(../assets/img/1.jpg);" }}
                ></div>
              </div>
              <div class="col-lg-12">
                <div
                  class="card imageSlider"
                  style={{ backgroundImage: "url(../assets/img/1.jpg);" }}
                ></div>
              </div>
              <div class="col-lg-12">
                <div
                  class="card w-100 imageSlider"
                  style={{ backgroundImage: "url(../assets/img/1.jpg);" }}
                ></div>
              </div>
              <div class="col-lg-12">
                <div
                  class="card w-100 imageSlider"
                  style={{ backgroundImage: "url(../assets/img/1.jpg);" }}
                ></div>
              </div>
              <div class="col-lg-12">
                <div
                  class="card w-100 imageSlider"
                  style={{ backgroundImage: "url(../assets/img/1.jpg);" }}
                ></div>
              </div>
              <div class="col-lg-12">
                <div
                  class="card w-100 imageSlider"
                  style={{ backgroundImage: "url(../assets/img/1.jpg);" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,96C384,107,480,117,576,106.7C672,96,768,64,864,58.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>

          <div class="text-center p-5 text-white">
            <h1 class="mb-3 font-weight-bold">Pogodnosti koje nudimo</h1>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="container">
            <div class="card-deck">
              <div
                class="card justify-content-center"
                style={{ backgroundColor: "#ffffff", borderRadius: "10%" }}
              >
                <img
                  src={Calendar}
                  class="py-4"
                  style={{
                    width: "40%",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                />
                <div class="card-body justify-content-center text-center ">
                  <h5 class="card-title">Pogodnost Jedan</h5>
                  <p class="card-text">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit..."
                  </p>
                </div>
              </div>

              <div
                class="card justify-content-center"
                style={{ backgroundColor: "#ffffff", borderRadius: "10%" }}
              >
                <img
                  src={Bus}
                  class="py-4"
                  style={{
                    width: "40%",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                />
                <div class="card-body justify-content-center text-center ">
                  <h5 class="card-title">Pogodnost Dva</h5>
                  <p class="card-text">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit..."
                  </p>
                </div>
              </div>

              <div
                class="card justify-content-center"
                style={{ backgroundColor: "#ffffff", borderRadius: "10%" }}
              >
                <img
                  src={CreditCard}
                  class="py-4"
                  style={{
                    width: "40%",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                />
                <div class="card-body justify-content-center text-center ">
                  <h5 class="card-title">Pogodnost Tri</h5>
                  <p class="card-text">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit..."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,32L34.3,32C68.6,32,137,32,206,37.3C274.3,43,343,53,411,80C480,107,549,149,617,149.3C685.7,149,754,107,823,101.3C891.4,96,960,128,1029,149.3C1097.1,171,1166,181,1234,170.7C1302.9,160,1371,128,1406,112L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div class="container-fluid">
          <div class="d-lg-flex justify-content-lg-between align-items-center">
            <div class="col-12 col-lg-4 px-5 text-justifyed">
              <h1 class="font-weight-bolder py-5 text-justify">
                Preuzmite novu e-bus aplikaciju!
              </h1>
              <p class="font-weight-bolder text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                molestie ante sed tellus auctor bibendum. Mauris volutpat
                lobortis magna, ut tempus lacus condimentum in. Integer sit amet
                consectetur elit, vitae facilisis lacus. Duis scelerisque justo
                ac tempus lacinia. Nunc eleifend fermentum elit quis volutpat.
                Vestibulum cursus hendrerit accumsan. Suspendisse at mi mauris.
                Aliquam tempor urna elit, sed lacinia lectus tempor et.
              </p>
            </div>

            <div class="d-flex justify-content-center col-12 col-lg-5 px-5">
              <img src={MockUpHomePage} width="50%" />
            </div>

            <div class="col-12 col-lg-3 text-center">
              <img src={Qr} class="mb-3" />
              <img src={Google} width="50%" class="mb-2" />
              <img src={Apple} width="50%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
