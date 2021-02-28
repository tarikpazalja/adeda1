import React from "react";
import { useState } from "react";

import Loupe from "../assets/img/loupe.png";

import TabContent1 from "./TabContent1";
import TabContent2 from "./TabContent2";
import TabContent3 from "./TabContent3";

const Form = (props) => {
  const [toggleState, setToggleState] = useState(1);
  const [startDate, setStartDate] = useState(new Date());

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      {/* div za naslov  */}
      <div className="col-12 text-white text-center py-3 p-lg-5">
        <h1 className="h1 mb-2 font-weight-bold">
          Kupite autobusku kartu koristeci eBus!
        </h1>
        <h3 className="font-weight-bolder">
          Izaberite Vasu sljedecu destinaciju
        </h3>
      </div>
      {/* div za formu  */}
      <div className="d-flex justify-content-center container pt-1 pb-3">
        <div className="d-lg-flex justify-content-lg-center">
          <div
            className="align-self-center w-100 d-lg-flex justify-content-evenly  pe-md-0 py-5 py-md-0 bg-primary bg-md-gray rounded"
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
                    className={
                      toggleState === 1 ? "nav-link active" : "nav-link"
                    }
                    onClick={() => toggleTab(1)}
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
                    className={
                      toggleState === 2 ? "nav-link active" : "nav-link"
                    }
                    onClick={() => toggleTab(2)}
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
                    className={
                      toggleState === 3 ? "nav-link active" : "nav-link"
                    }
                    onClick={() => toggleTab(3)}
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
                <TabContent1
                  toggleState={toggleState}
                  startDate={startDate}
                  setStartDate={setStartDate}
                />
                <TabContent2
                  toggleState={toggleState}
                  startDate={startDate}
                  setStartDate={setStartDate}
                />

                <TabContent3 toggleState={toggleState} />
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
            Kupi kartu <img src={Loupe} class="img-fluid" alt="" width="32px" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Form;
