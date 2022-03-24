import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { MdCastForEducation } from "react-icons/md";
import { DiCss3 } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="about box" id="second">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="about-content">
          <div className="image">
            {" "}
            <img src={ME} alt="" />
          </div>

          <div className="grid">
            <div className="card-item">
              <MdCastForEducation className="about-icon"/>
              <h3>BSc in CSE</h3>
              <p>From IUBAT</p>
            </div>

            <div className="card-item">
              <DiCss3 className="about-icon"/>
              <h3>Web Design</h3>
              <p>2 Years+ Experience</p>
            </div>

            <div className="card-item">
              <FaLaravel className="about-icon"/>
              <h3>Web Development</h3>
              <p>1 Year+ Experience</p>
            </div>

            <div className="item4">
              <div className="hl"></div>
              <h3>
                Hi! This is Tariqul Islam Khan from Dhaka, Bangladesh. I like to address myself
                as a web developer. I love to use creative approach to problem solve. I have done my 
                BSc in CSE from IUBAT. I have 2+ years of experience in web design. Designing a web page is the thing which I love most.<br/>
                Thank you for visiting my portfolio site. Take 💕 
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
