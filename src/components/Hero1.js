import React from "react";
import Form from "../components/Form";
import DownArrow from "../assets/img/down-arrow.png";
import Loupe from "../assets/img/loupe.png";
import Calendar from "../assets/img/calendar.png";
import Bus from "../assets/img/bus.png";
import CreditCard from "../assets/img/credit-card.png";
import MockUpHomePage from "../assets/img/mockup-homepage.png";
import Qr from "../assets/img/Qr-1.png";
import Google from "../assets/img/google1.png";
import Apple from "../assets/img/apple1.png";

const Hero1 = () => {
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
          <Form />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,160L34.3,154.7C68.6,149,137,139,206,160C274.3,181,343,235,411,229.3C480,224,549,160,617,144C685.7,128,754,160,823,181.3C891.4,203,960,213,1029,192C1097.1,171,1166,117,1234,106.7C1302.9,96,1371,128,1406,144L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
