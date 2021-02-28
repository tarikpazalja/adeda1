import React from "react";
import { useState } from "react";
import PretragaPoLinijama from "../components/PretragaPoLinijama";
import GradskeStanice from "../components/GradskeStanice";
const TabContent3 = (props) => {
  const [checked, setChecked] = useState(1);
  const [show, setShow] = useState(true);

  const toggleCheck = (index) => {
    setChecked(index);
  };

  // const toggleCheck1 = () => {
  //   setChecked(1);
  // };
  // const toggleCheck2 = () => {
  //   setChecked(2);
  //   setShow(!show);
  // };

  return (
    <div
      className={
        props.toggleState === 3
          ? "tab-pane fade show active"
          : "tab-pane fade show mt-n3"
      }
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
              checked={checked === 1 ? "checked" : ""}
              onClick={() => toggleCheck(1)}
              name="nacinPretrage"
              id="pretragaPolinijama"
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
              checked={checked === 2 ? "checked" : ""}
              onClick={() => toggleCheck(2)}
              name="nacinPretrage"
              id="pretragaPoStanicama"
              value="1"
            />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      {checked === 1 ? <PretragaPoLinijama /> : <GradskeStanice />}
    </div>
  );
};

export default TabContent3;
