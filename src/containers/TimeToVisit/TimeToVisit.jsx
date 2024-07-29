import React from "react";
import SvgContent from "../../components/SvgContent/SvgContent";
import "./TimeToVisit.scss";
import svgInfo from "./index";

const TimeToVisit = () => {
  return (
    <div id="timeToVisit" className="app__container-bg">
      <div className="app__visit">
        <div className="app__visit-head">
          <h1>Time to Visit</h1>
          <p>Devotees visit the temple throughout the year</p>
        </div>

        <div className="app__visit-info">
          {svgInfo.map((item) => (
            <div key={item.title}>
              <SvgContent
                title={item.title}
                info={item.info}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
  </div>
  );
};

export default TimeToVisit;
