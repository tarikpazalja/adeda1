import React from "react";

const GradskeStanice = () => {
  return (
    <div class="d-flex flex-wrap justify-content-center align-items-center mb-1 w-100">
      <div class="col-12 col-lg-3 p-0 pb-2 mr-lg-2">
        <select
          className=" mb-2 col-12 col-lg-4 p-0 mx-1  custom-select custom-select-lg bg-light bg-md-primary text-dark text-md-white rounded"
          name="mjesto"
          id="gradskeSelectGrad"
          aria-label="Default select example"
        >
          <option value="" selected>
            Za grad
          </option>
          <option value="SARAJEVO">Sarajevo</option>
          <option value="ZENICA">Zenica</option>
        </select>
      </div>
      <div class="mb-2 col-12 col-lg-4 p-0 mx-1 ">
        <input
          type="text"
          class="form-control form-control-lg bg-light bg-md-primary text-dark text-md-white input-autocomplete w-100"
          name="polaziste"
          id="polazisteGradske"
          placeholder="Od"
          required
        />
      </div>
      <div class="mb-2 col-12 col-lg-4 p-0 mx-1">
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
  );
};

export default GradskeStanice;
