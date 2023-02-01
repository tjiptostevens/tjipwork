import React from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import useWindow from "../custom/useWindow";
import mePhoto from "../assets/img/me.jpg";

const Navbar = () => {
  const { width } = useWindow();
  return (
    <>
      <div className="__navbar">
        <div className="__nlogocontainer">
          <div className="__nlogo">
            {/* <div className="w-100" style={{ height: "50px" }}></div> */}
            <Link
              className=""
              to="/"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "initial",
              }}
            >
              <div
                className="__nlogoimg"
                style={{
                  background: `url(${mePhoto}) center center / cover`,
                  position: "relative",
                }}
              ></div>

              <div className="w-100" style={{ padding: "15px" }}>
                {width > 450 ? (
                  <p>
                    <b>TJIPTO</b> <b>STEVEN SENJAYA</b>
                    <br />
                    <small>Web Developer & UI/UX Designer</small>
                  </p>
                ) : (
                  ""
                )}
              </div>
            </Link>
            {/* <div className="w-100" style={{ height: "50px" }}></div> */}
          </div>
          {/* <div
            style={{
              position: "absolute",
              left: "-30px",
              top: "0",
              fontSize: "100px",
              fontWeight: "900",
              textOverflow: "clip",
              width: "inherit",
              rotate: "-30deg",
            }}
          >
            TJIPTO
          </div> */}
        </div>

        <div className="__nlinkcontainer">
          <hr />
          <div className="__nlink">
            <div className="__nlinkitem">
              <i className="bi bi-house"></i>
              {width > 450 ? " HOME" : ""}
            </div>
          </div>
          <hr />
          <div className="__nlink">
            <div className="__nlinkitem">
              <i className="bi bi-person"></i>
              {width > 450 ? " ABOUT" : ""}
            </div>
          </div>
          <hr />
          <div className="__nlink">
            <div className="__nlinkitem">
              <i className="bi bi-code-square"></i>
              {width > 450 ? " WORK" : ""}
            </div>
          </div>
          <hr />
          <div className="__nlink">
            <div className="__nlinkitem">
              <i className="bi bi-chat-square-text"></i>
              {width > 450 ? " CONTACT" : ""}
            </div>
          </div>
          <hr />
        </div>

        <div className="__nsocialcontainer">
          <div className="__nsocial">
            <i className="bi bi-instagram"></i>
          </div>

          <div className="__nsocial">
            {" "}
            <i className="bi bi-linkedin"></i>
          </div>
          <div className="__nsocial">
            {" "}
            <i className="bi bi-github"></i>
          </div>
        </div>

        <div
          className="w-100"
          style={{ height: "25px", textAlign: "center", fontSize: "12px" }}
        >
          {width > 450 ? (
            <small>&copy; copyright 2022, TJIP DEV WORK</small>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
