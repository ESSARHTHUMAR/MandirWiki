import React from "react";
import "./TrekDistance.scss";
import { Location, Altitude, Distance } from "./index";

const TrekDistance = () => {
  return (
    <div id="trekDistance" className="app__container">
      <div className="app__trek-head">
        <h1>Trek Distance</h1>
      </div>
      <div className="app__trek">
        <div className="app__trek-flex">
          <div className="app__trek-content">
            <h2>Location</h2>
            {Location.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
              <div className="app__trek-col2">
          <div className="app__trek-content">
            <h2>Altitude</h2>
            {Altitude.map((item) => (
              <p style={{ fontWeight: "600" }} key={item}>
                {item}
              </p>
            ))}
          </div>

          <div className="app__trek-content">
            <h2>Distance</h2>
            {Distance.map((item) => (
              <p style={{ fontWeight: "600" }} key={item}>
                {item}
              </p>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekDistance;
