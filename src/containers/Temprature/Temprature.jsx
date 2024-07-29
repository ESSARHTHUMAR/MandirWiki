import React from "react";
import "./Temprature.scss";

const Temprature = () => {
  return (
    <div id="temp" className="app__container">
      <h1 className="app__temp-head">Avg. Temperature (°C)</h1>
      <div className="app__temp-flex">
        <div className="app__temp-location">
          <h2>Location</h2>
          <p>Katra</p>
          <p>Ardhkuwari</p>
          <p>Bhawan</p>
          <p>Bhairon Ghati</p>
        </div>
        <div className="app__temp-info">
          <div className="app__temp-col">
            <h2>
              Summer <span>(Min/Max)</span>
            </h2>
            <p>20°C / 41°C</p>
            <p>16°C / 33°C</p>
            <p>15°C / 30°C</p>
            <p>12°C / 26°C</p>
          </div>
          <div className="app__temp-col">
            <h2>
              Distance <span>(Min/Max)</span>
            </h2>
            <p>03°C / 15°C</p>
            <p>01°C / 15°C</p>
            <p>-02°C / 13°C</p>
            <p>-03°C / 11°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temprature;
