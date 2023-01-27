import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="__navbar">
        <div className="__nlogocontainer">
          <div className="__nlogo">
            <div className="w-100" style={{ height: "50px" }}></div>

            <div className="__nlogoimg"></div>
            <p>
              <b>TJIPTO STEVEN SENJAYA </b>
              <br />
              <small>Graphic Designer & Front-End Developer</small>
            </p>
            <p></p>
            <div className="w-100" style={{ height: "50px" }}></div>
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
              <i className="bi bi-house"></i> HOME
            </div>
          </div>
          <hr />
          <div className="__nlink">
            <div className="__nlinkitem">
              <i className="bi bi-person"></i> ABOUT
            </div>
          </div>
          <hr />
          <div className="__nlink">
            <div className="__nlinkitem">
              <i className="bi bi-code-square"></i> WORK
            </div>
          </div>
          <hr />
          <div className="__nlink">
            <div className="__nlinkitem">
              <i className="bi bi-chat-square-text"></i> CONTACT
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

        <div className="w-100" style={{ height: "25px" }}>
          <small>&copy; copyright 2022, TJIP DEV WORK</small>
        </div>
      </div>
    </>
  );
};

export default Navbar;
