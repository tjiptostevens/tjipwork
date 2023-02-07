import React from "react";
import "../assets/css/navbar.css";
import { Link, NavLink } from "react-router-dom";
import useWindow from "../custom/useWindow";
import mePhoto from "../assets/img/me.jpg";
import logo from "../assets/img/logo512.png";

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
              {width > 450 ? (
                <>
                  <div
                    className="__nlogoimg"
                    style={{
                      background: `url(${mePhoto}) center center / cover`,
                      position: "relative",
                    }}
                  ></div>

                  <div className="w-100" style={{ padding: "15px" }}>
                    <p>
                      <b>TJIPTO</b> <b>STEVEN SENJAYA</b>
                      <br />
                      <small>Web Developer & UI/UX Designer</small>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      background: `url(${logo}) center center / cover`,
                      height: "150px",
                      width: "50px",
                    }}
                  ></div>
                  {/* <img src={logo} width="100%" alt="Tjip Dev Work Logo" /> */}
                </>
              )}
            </Link>
            {/* <div className="w-100" style={{ height: "50px" }}></div> */}
          </div>
        </div>

        <div className="__nlinkcontainer">
          <hr />
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "__nlink_active" : "__nlink"
            }
          >
            <div className="__nlinkitem">
              <i className="bi bi-house"></i>
              HOME
            </div>
          </NavLink>
          <hr />
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? "__nlink_active" : "__nlink"
            }
          >
            <div className="__nlinkitem">
              <i className="bi bi-person"></i>
              ABOUT
            </div>
          </NavLink>
          <hr />
          <NavLink
            to="work"
            className={({ isActive }) =>
              isActive ? "__nlink_active" : "__nlink"
            }
          >
            <div className="__nlinkitem">
              <i className="bi bi-code-square"></i>
              WORK
            </div>
          </NavLink>
          <hr />
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? "__nlink_active" : "__nlink"
            }
          >
            <div className="__nlinkitem">
              <i className="bi bi-chat-square-text"></i>
              CONTACT
            </div>
          </NavLink>
          <hr />
        </div>

        <div className="__nsocialcontainer">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/tjiptostevens/"
            className="__nsocial"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/tjiptostevens"
            className="__nsocial"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/tjiptostevens"
            className="__nsocial"
          >
            <i className="bi bi-github"></i>
          </a>
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
