import React, { useState } from "react";
import useWindow from "../custom/useWindow";
import "../assets/css/contact.css";
import "../assets/css/animation.css";

const Contact = () => {
  const { width } = useWindow();
  const [data, setData] = useState("");
  const handleChange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    setData({ ...data, [nam]: val });
    console.log(nam, val);
  };
  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
  };

  return (
    <>
      <div
        className="w-100"
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        <div className="__concontainer">
          {/* Title */}
          <div className="__contitle" style={{ lineHeight: "1" }}>
            <div
              style={{
                fontSize: width > 450 ? "80px" : "50px",
                fontWeight: "900",
                display: "flex",
                flexDirection: "row",
              }}
            >
              CONTACT ME
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
            <div style={{ fontSize: width > 450 ? "40px" : "25px" }}>
              For work, problem solving or just to chat.
            </div>
            <div className="w-100" style={{ height: "25px" }}></div>
          </div>
          <div className="w-100" style={{ height: "25px" }}></div>
          {/* form */}
          <div className="__concontent row w-100">
            <div className="col-md-1"></div>
            <div className="__coninfocontainer col-md-3">
              <div
                className="shake-flying"
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "300px",
                  position: "absolute",
                  bottom: "0px",
                  right: "0px",
                  background: "dodgerblue",
                  translate: "125px 90px",
                }}
              ></div>
              <div
                className="shake-flying"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "30px",
                  position: "absolute",
                  bottom: "100px",
                  right: "60px",
                  background: "rgba(255,255,255,0.7)",
                  rotate: "60deg",
                }}
              ></div>
              <div className="w-100">
                <div
                  className="w-100"
                  style={{
                    fontSize: width > 450 ? "40px" : "20px",
                    fontWeight: "700",
                  }}
                >
                  Contact Information
                </div>
                <div
                  className="w-100"
                  style={{
                    fontSize: width > 450 ? "18px" : "12px",
                    fontWeight: "100",
                    padding: "7px 0",
                  }}
                >
                  GMT +7, Business hour
                </div>
              </div>

              {/* Other Contact */}
              <div className="w-100" style={{ padding: "15px" }}>
                <a
                  href="tel:+6287832340390"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                    }}
                  >
                    <i
                      className="bi bi-phone"
                      style={{ marginRight: "7px" }}
                    ></i>{" "}
                    <p> +62 878 3234 0390</p>
                  </div>
                </a>
                <a
                  href="mailto:tjip@tjip.work"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                    }}
                  >
                    <i
                      className="bi bi-mailbox"
                      style={{ marginRight: "7px" }}
                    ></i>
                    <p>tjip@tjip.work</p>
                  </div>
                </a>
                <a
                  href="https://goo.gl/maps/YquPscmxNH67CbrZ9"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                    }}
                  >
                    <i
                      className="bi bi-geo-alt"
                      style={{ marginRight: "7px" }}
                    ></i>
                    <p>
                      Jl Taman Pedurungan Tengah I, <br /> Semarang, JT -
                      Indonesia
                    </p>
                  </div>
                </a>
              </div>

              {/* Social contact */}
              <div className="w-100">
                <div className="__consocialcontainer">
                  <a
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/tjiptostevens/"
                    className="__nsocial"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>

                  <a
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/tjiptostevens"
                    className="__nsocial"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/tjiptostevens"
                    className="__nsocial"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.fiverr.com/s2/da5eb53933"
                    className="__nsocial"
                  >
                    <i className="bi bi-5-square"></i>
                  </a>
                </div>
              </div>
            </div>
            <form
              className="__conformcontainer col-md-6"
              onSubmit={handleSubmit}
            >
              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-3">name</div>
                <div className="col-md-9">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-3">mobile</div>
                <div className="col-md-9">
                  <input
                    className="form-control"
                    type="number"
                    name="mobile"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-3">email</div>
                <div className="col-md-9">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-3">type</div>
                <div className="col-md-9">
                  <select
                    className="form-select"
                    name="type"
                    value={data.type}
                    onChange={handleChange}
                  >
                    <option value="-" disabled={true}>
                      message type select
                    </option>
                    <option value="web">web development</option>
                    <option value="design">ui/ux design</option>
                    <option value="music">music production</option>
                    <option value="data">data analytics</option>
                    <option value="other">others</option>
                  </select>
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-3">message</div>
                <div className="col-md-9">
                  <textarea
                    className="form-control"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-3"></div>
                <div className="col-md-9">
                  <button className="btn btn-primary">
                    <i className="bi bi-cursor"></i> send
                  </button>
                </div>
              </div>
            </form>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
