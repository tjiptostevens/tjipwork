import React from "react";
import useWindow from "../custom/useWindow";
import "../assets/css/animation.css";

const Contact = () => {
  const { width } = useWindow();
  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <>
      <div
        className="w-100"
        style={{ display: "flex", height: "100vh", padding: "50px" }}
      >
        <div
          className="w-100"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="row col-md-12">
            {/* Title */}
            <div style={{ lineHeight: "1" }}>
              <div
                style={{
                  fontSize: width > 450 ? "80px" : "40px",
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
              <div style={{ fontSize: width > 450 ? "40px" : "20px" }}>
                For work, problem solving or just to chat.
              </div>
              <div className="w-100" style={{ height: "25px" }}></div>
            </div>
            <div className="w-100" style={{ height: "25px" }}></div>
            <div className="col-md-1"></div>
            <div
              className="col-md-3"
              style={{
                background: "coral",
                color: "white",
                borderRadius: "15px",
                padding: "25px",
                lineHeight: "1",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
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
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "30px",
                  position: "absolute",
                  bottom: "100px",
                  right: "60px",
                  background: "white",
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                  }}
                >
                  <i className="bi bi-phone" style={{ marginRight: "7px" }}></i>{" "}
                  <p> +62 878 3234 0390</p>
                </div>
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
              </div>

              {/* Social contact */}
              <div className="w-100">
                <div
                  className="__nsocialcontainer"
                  style={{ justifyContent: "flex-start" }}
                >
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
              className="col-md-6"
              onSubmit={handleSubmit}
              style={{ padding: "15px" }}
            >
              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-3" style={{ textAlign: "right" }}>
                  name
                </div>
                <div className="col-md-9">
                  <input className="form-control" type="text" name="name" />
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-3" style={{ textAlign: "right" }}>
                  mobile
                </div>
                <div className="col-md-9">
                  <input className="form-control" type="number" name="mobile" />
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-3" style={{ textAlign: "right" }}>
                  email
                </div>
                <div className="col-md-9">
                  <input className="form-control" type="email" name="email" />
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-3" style={{ textAlign: "right" }}>
                  type
                </div>
                <div className="col-md-9">
                  <select className="form-select" value={"0"}>
                    <option value="0" disabled="true">
                      message type select
                    </option>
                    <option value="1">web development</option>
                    <option value="2">ui/ux design</option>
                    <option value="3">music production</option>
                    <option value="4">data analytics</option>
                    <option value="5">others</option>
                  </select>
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-3" style={{ textAlign: "right" }}>
                  message
                </div>
                <div className="col-md-9">
                  <textarea
                    className="form-control"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-3" style={{ textAlign: "right" }}></div>
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
