import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import workdata from "../../assets/mywork_data.js";
import mywork_data from "../../assets/mywork_data.js";
import arrow from "../../assets/arrow_icon.svg";

function MyWork() {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>Journey of my Work</h1>
        <img src={theme_pattern} alt="Decorative line" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>See More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
}

export default MyWork;
