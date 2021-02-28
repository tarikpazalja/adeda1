import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DownArrow from "../assets/img/down-arrow.png";
const TabContent2 = (props) => {
  return (
    <div
      className={
        props.toggleState === 2
          ? "tab-pane fade show active"
          : "tab-pane fade show"
      }
      id="drzavne-search"
      role="tabpanel"
      aria-labelledby="drzavne-search-tab"
    >
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
          <div class=" rounded mb-2 mr-lg-2 col-12 col-lg-4 p-0">
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
              <img src={DownArrow} class="img-fluid ml-3" alt="" width="15" />
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
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
              <img src={DownArrow} class="img-fluid ml-3" alt="" width="15" />
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop2">
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
              <img src={DownArrow} class="img-fluid ml-3" alt="" width="15" />
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop3">
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
  );
};

export default TabContent2;
