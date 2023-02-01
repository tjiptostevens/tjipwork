import React from "react";
import logo from "../assets/img/logo512.png";
import "../assets/css/content.css";
import useWindow from "../custom/useWindow";

const Content = (props) => {
  const { width } = useWindow();
  return (
    <>
      <div className="__content">
        <div className="col-md-12">
          <div className="col-md-6">
            <img src={logo} alt="Logo Tjip Work" height="50px" />
            {props.mouse.x},{props.mouse.y}
            <div style={{ lineHeight: "1" }}>
              <div style={{ fontSize: width > 450 ? "60px" : "30px" }}>
                Hello, it's me
              </div>
              <div
                style={{
                  fontSize: width > 450 ? "120px" : "60px",
                  fontWeight: "900",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                TJIPTO
                <div
                  style={{
                    background: "coral",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div className="w-100" style={{ height: "25px" }}></div>
            </div>
            <div className="__contenttext">
              <p>
                I am a highly motivated and hard-working individual who is
                dedicated to achieving success in IT field. My passion for my
                work drives me to tackle challenges head-on and always strive to
                do my best. I am an open and honest person who values fairness
                and integrity in all aspects of my life. With a background in
                graphic design and a strong foundation in programming languages
                such as Python, PHP, and JavaScript, I have developed a diverse
                skill set in my pursuit of becoming a fullstack developer.
              </p>
              <p>
                I am also someone who values honesty, creativity, and a
                commitment to continuous learning. My leadership strengths, as
                identified by the Gallup Cliffton Strength assessment, include
                futuristic thinking, ideation, focus, learner, and command.
              </p>
              <p>
                My ultimate goal is to utilize my skills, experience, and
                passion to create innovative solutions and make a meaningful
                impact in the industry.
              </p>
            </div>
            <div className="w-100" style={{ height: "25px" }}></div>
            <button className="btn btn-primary" style={{ background: "coral" }}>
              MORE
            </button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
};

export default Content;
