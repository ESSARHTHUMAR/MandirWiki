import React from "react";
import "./Footfall.scss";

const Footfall = () => {
  return (
    <div id="footFall" className="app__container-bg">
      <div className="app__footfall">
        <h1>Footfall</h1>

        <div className="app__footfall-main">
          <div className="app__footfall-col">
            <div className="app__footfall-row">
              <h2>
                Peak Months <span>(Approx)</span>
              </h2>
              <p>Apr - 1018540</p>
              <p>May - 995773</p>
              <p>Jun - 1195844</p>
              <p>Sep - 794156</p>
              <p>Oct - 915703</p>
            </div>
            <div className="app__footfall-row">
              <h2>On Daily Basis</h2>
              <p>30000 - 40000</p>
            </div>
          </div>
          <div className="app__footfall-col">
            <div className="app__footfall-row">
              <h2>
                Off Peak Months <span>(Approx)</span>
              </h2>
              <p>Apr - 1018540</p>
              <p>May - 995773</p>
              <p>Jun - 1195844</p>
              <p>Sep - 794156</p>
              <p>Oct - 915703</p>
            </div>
            <div className="app__footfall-row">
              <h2>
                Off Peak Months <span>(Approx)</span>
              </h2>
              <p>13000-15000</p>
            </div>
          </div>
        </div>
        <p className="app__footfall-yatra">
          Only 30000 yatra registrations are allowed per day.
        </p>
      </div>
    </div>
  );
};

export default Footfall;
