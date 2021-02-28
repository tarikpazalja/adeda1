import React from "react";
import DownArrow from "../assets/img/down-arrow.png";
import Loupe from "../assets/img/loupe.png";

const Form1 = () => {
  return (
    <div className="container ">
      <div className="text-white text-start ms-5">
        <h1>Kupite autobusku kartu koristeci eBus!</h1>
        <h3>Izaberite Vasu sljedecu destinaciju</h3>
      </div>
      <div className="container">
        <div className="d-lg-flex justify-content-lg-center">
          <div
            className="align-self-center w-100 d-lg-flex px-5 pr-md-0 py-5 py-md-0 bg-primary bg-md-gray rounded"
            id="searchForm"
          >
            hgjkjhkjh
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

export default Form1;
