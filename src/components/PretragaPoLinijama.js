import React from "react";

const PretragaPoLinijama = () => {
  return (
    <div class="d-flex flex-wrap justify-content-center align-items-center mb-1 w-100">
      <div class="d-flex flex-wrap justify-content-center align-items-center mb-1 w-100">
        <div
          class="d-flex justify-content-lg-center col-12 col-lg-8 p-0 ml-lg-2"
          id="inputGradskihStanica"
        >
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
            class="d-flex justify-content-center col-12 col-lg-6 p-0 mb-1 ml-lg-2"
            id="selectGradskihLinija"
          >
            <select class="custom-select custom-select-lg bg-light bg-md-primary text-dark text-md-white w-100">
              <option value="" selected>
                Odaberite liniju
              </option>
              <option>BOLNICA - KANAL</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PretragaPoLinijama;
