import React, { useRef, useState } from "react";
import "./Temple.scss";
import Content from "./index";
import SvgContent from "../../components/SvgContent/SvgContent";
import { svgInfo } from "./index";

const Temple = () => {

  const [active, setactive] = useState()
  const handleClick = (item) => {
    setactive(item.link)
   }
  return (
    <div className="app__container">
      <div className="app__temple">
        <div className="app__temple-content">
          {Content.map((item) => (
            <div key={item.link} style={{backgroundColor: active === item.link ? "#080E1E" : "#f7f6f0"}} className="app__temple-capsule">
              <a style={{color: active === item.link ? "#FFFFFF" : "#080E1E"}} onClick={() => handleClick(item)} href={`#${item.link}`}>{item.title}</a>
            </div>
          ))}
        </div>
      </div>
      <div id="temple" className="app__temple-head">
        <h1>Shree Mata Vaishno Devi Temple</h1>
        <p>
          <span>Vaishno Devi Temple</span>, also known as the Shri Mata Vaishno
          Devi Temple and Vaishno Devi Bhavan, is a Hindu mandir
          (temple) located in Katra, Jammu and Kashmir, dedicated to Vaishno
          Devi, a manifestation of Durga. It is located on the Trikuta
          mountain at 5,000 feet elevation. The Shakti tradition considers it to
          be a Shakti Pitha. The temple is governed by the Shri Mata Vaishno
          Devi Shrine Board (SMVDSB) and has been chaired by the Government of
          Jammu and Kashmir since August 1986.
        </p>
      </div>
      <div className="app__temple-info">
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
  );
};

export default Temple;
