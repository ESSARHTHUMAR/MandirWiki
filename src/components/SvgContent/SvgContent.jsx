import React from "react";
import "./SvgContent.scss";

const SvgContent = ({ title, info, image }) => {
  return (
    <div className="app__svgContent">
      {/* <div className="app__svgContent-items"> */}
        <div className="app__svgContent-svg">
          <img src={image} alt={title} />
        </div>
        <div className="app__svgContent-info">
          <p className="app__svgContent-title">{title}</p>
          <p className="app__svgContent-info">{info}</p>
        {/* </div> */}
      </div>

    </div>
  );
};

export default SvgContent;
