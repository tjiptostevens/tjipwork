import React from "react";
import logo from "../assets/img/logo512.png";
import useWindow from "../custom/useWindow";
import "../assets/css/animation.css";
import "../assets/css/conhai.css";
import { Link } from "react-router-dom";
const ConHai = (props) => {
  const { width } = useWindow();
  return (
    <div
      className="w-100"
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <div className="__haicontainer">
        <div className="col-md-6">
          <img src={logo} alt="Logo Tjip Work" height="50px" />
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
              <div className="shake-flying">
                <div
                  className="jello-horizontal"
                  style={{
                    background: "coral",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            </div>
            <div className="w-100" style={{ height: "25px" }}></div>
          </div>
          <div className="__contenttext">
            <p>
              Do you need an IT expert who can tackle your toughest challenges
              with ease? Look no further! At TJIP.WORK, we offer professional
              problem-solving services that can help you achieve your goals and
              reach your full potential.
            </p>
            <p>
              With a passion for technology and a commitment to delivering
              outstanding results, our team of experts is dedicated to helping
              you solve your most pressing IT problems. Whether you're looking
              to improve your website, streamline your workflow, or tackle a
              complex technical challenge, we've got you covered.
            </p>
          </div>
          <div className="w-100" style={{ height: "25px" }}></div>
          <Link to="about">
            <button className="btn btn-primary" style={{ background: "coral" }}>
              MORE
            </button>
          </Link>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default ConHai;
