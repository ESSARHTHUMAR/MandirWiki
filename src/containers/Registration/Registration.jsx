import React from "react";
import "./Registration.scss";

const Registration = () => {
  return (
    <div id="registration" className="app__container-bg">
      <div className="app__registration">
        <div className="app__registration-head">
          <h1>Yatra Parchi / Registration</h1>
          <p>Yes/No with website and total registration permitted every day</p>
        </div>
        <ol className="app__registration-list">
          <li>Yatra slip / RFID is mandatory</li>
          <li>
            Registration is to be done at the Yatra registration counter near
            the Katra bus stand or online at <span>https://www.maavaishnodevi.org</span>
          </li>
          <li>
            Yatri is required to cross the first Check Post located at Banganga
            (around <span>1.5 kilometres</span> from the YRC) within <span>6 hours</span> of the issue of
            the RFID Card, failing which his/her Yatra Acces Card is confiscated
            at the Check Post and Yatri is required to take a fresh Yatra Access
            Card altogether.
          </li>
          <li>Daily Registration Limit <span>30,000-35,000</span></li>
        </ol>
      </div>
    </div>
  );
};

export default Registration;
