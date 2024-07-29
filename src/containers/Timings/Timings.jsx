import React from "react";
import "./Timings.scss";
import temple from "../../assets/temple/temple.svg";
import watch from "../../assets/temple/temple.svg";
import gufa from "../../assets/timings/gufa.svg";

const Timings = () => {
  return (
    <div id="timings" className="app__container">
      <div className="app__timings-head">
        <h1>Temple Timings</h1>
      </div>
      <div className="app__timings-info">
        <div className="app__timings-col">
          <div className="app__timings-row">
            <div className="app__timings-content">
              <div className="app__timings-svg">
                <img src={temple} alt="" />
              </div>
              <div className="app__timings-opening">
                <p className="app__timings-title">Mandir Opening</p>
                <p className="app__timings-time">06:00 am to 01:00 pm </p>
                <p className="app__timings-time">04:00 pm to 08:00 pm</p>
              </div>
            </div>
          </div>
          <div className="app__timings-row">
            <div className="app__timings-content">
              <div className="app__timings-svg">
                <img src={temple} alt="" />
              </div>
              <div className="app__timings-opening">
                <p className="app__timings-title">Aarti Timings</p>
                <div className="app__timings-times">
                  <div>
                    <p className="app__timings-time">Mangal Aarti</p>
                    <p className="app__timings-time">
                      Shringar Aarti (Morning)
                    </p>
                    <p className="app__timings-time">Bhog Aarti</p>
                    <p className="app__timings-time">
                      Shringar Aarti (Evening)
                    </p>
                    <p className="app__timings-time">Shayan Aarti</p>
                  </div>
                  <div>
                    <p className="app__timings-time1">06:00 AM</p>
                    <p className="app__timings-time1">07:00 AM</p>
                    <p className="app__timings-time1">01:00 PM</p>
                    <p className="app__timings-time1">07:00 PM</p>
                    <p className="app__timings-time1">08:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app__timings-col">
          <div className="app__timings-row">
            <div className="app__timings-content">
              <div className="app__timings-svg">
                <img src={gufa} alt="" />
              </div>
              <div className="app__timings-opening">
                <p className="app__timings-title">Gufa Opening</p>
                <p className="app__timings-time">08:00 am to 01:00 pm</p>
                <p className="app__timings-time">04:00 pm to 08:00 pm</p>
              </div>
            </div>
          </div>
          <div className="app__timings-row">
            <div className="app__timings-content">
              <div className="app__timings-svg">
                <img src={temple} alt="" />
              </div>
              <div className="app__timings-opening">
                <p className="app__timings-title">Aatka Aarti Price</p>
                <div className="app__timings-times">
                  <div>
                    <p className="app__timings-time">Single</p>
                    <p
                      className="app__timings-time"
                      style={{ paddingBottom: "30px" }}
                    >
                      Children ({"<"}10 Years)
                    </p>
                    <p className="app__timings-time">Group of 3 or 4</p>
                    <p className="app__timings-time">
                      Children ({"<"}10 Years) Free
                    </p>
                  </div>
                  <div>
                    <p className="app__timings-time1">Rs.2000</p>
                    <p
                      className="app__timings-time1"
                      style={{ paddingBottom: "30px" }}
                    >
                      Free
                    </p>
                    <p className="app__timings-time1">Rs.5100</p>
                    <p className="app__timings-time1">Free</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app__timings-col">
          {" "}
          <div className="app__timings-row">
            <div className="app__timings-content">
              <div className="app__timings-svg">
                <img src={watch} alt="" />
              </div>
              <div className="app__timings-opening">
                <p className="app__timings-title">Break Timings</p>
                <p className="app__timings-time">April - Sep : 1 PM - 4 PM </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app__timings-para">
        <p>
          This scheme also includes complimentary dormitory accommodation at
          Bhawan.
        </p>
      </div>
    </div>
  );
};

export default Timings;
