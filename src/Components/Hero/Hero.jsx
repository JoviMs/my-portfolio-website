import React from "react";
import "./Hero.css";
import profile_image from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_image} alt="" />
      <h1>
        I am <span>Junior Nfor</span>, a frontend developer who currently lives
        in <span>Germany.</span>
      </h1>
      <p>
        Motivated and forward-thinking student pursuing a B.Sc. in Artificial
        Intelligence, with a background in Computer Science Engineering.
        Experienced in front-end development and modern web technologies, with
        strong problem-solving skills and a passion for building efficient
        digital solutions. Quick learner, team-oriented, and committed to
        continuous growth.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Hit Me Up</div>
        <div className="hero-resume">My CV/Resume</div>
      </div>
    </div>
  );
};

export default Hero;
