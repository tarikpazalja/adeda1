import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DownArrow from "../assets/img/down-arrow.png";

const TabContent1 = (props) => {
  return (
    <div
      className={
        props.toggleState === 1
          ? "tab-pane fade show active"
          : "tab-pane fade show"
      }
      role="tabpanel"
      aria-labelledby="medjunarodne-search-tab"
    >
      <div className="pb-2">
        <div className="d-flex justify-content-evenly ">
          <div className="mb-4 mx-lg-2 col-12 col-lg-4 p-0">
            <input
              type="text"
              class="form-control form-control-lg bg-light bg-md-primary text-dark text-md-white input-autocomplete w-100"
              name="polaziste"
              placeholder="Od"
              required
            />
          </div>
          <div class="mb-4 mx-lg-2 col-12 col-lg-4 p-0">
            <input
              type="text"
              class="form-control form-control-lg bg-light bg-md-primary text-dark text-md-white input-autocomplete w-100"
              name="odrediste"
              placeholder="Do"
              required
            />
          </div>
          <div class="mb-4 mx-lg-2 col-12 col-lg-3 p-0">
            {/* <input
                          type="text"
                          class="btn btn-lg btn-block bg-light bg-md-primary text-dark text-md-white datepicker-kada text-left"
                          placeholder="Kada"
                        /> */}

            <DatePicker
              selected={props.startDate}
              onChange={(date) => props.setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              placeholderText="Kada"
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
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
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
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop2">
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
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop3">
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
  );
};

export default TabContent1;
