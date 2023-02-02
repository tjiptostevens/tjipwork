import React from "react";
import "../assets/css/conskill.css";

const ConSkill = (props) => {
  return (
    <>
      <div className="w-100" style={{ display: "flex", height: "100vh" }}>
        <div
          className="w-100"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="col-md-12"
            style={{
              padding: "50px",
            }}
          >
            <div className="w-100">My Skill set</div>
            <div className="w-100" style={{ height: "50px" }}></div>
            <div
              className="col-md-12"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="col-md-3"
                style={{ padding: "5px", height: "50vh", display: "block" }}
              >
                <div
                  className="w-100"
                  style={{ background: "white", textAlign: "center" }}
                >
                  <div
                    className="__bannerweb w-100"
                    style={{
                      width: "100%",
                      minHeight: "45vh",
                    }}
                  ></div>
                  <div className="w-100" style={{ padding: "15px" }}>
                    <p>Web App Development / SAAS</p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3"
                style={{ padding: "5px", height: "50vh", display: "block" }}
              >
                <div
                  className="w-100"
                  style={{ background: "white", textAlign: "center" }}
                >
                  <div
                    className="__bannerui w-100"
                    style={{
                      width: "100%",
                      minHeight: "45vh",
                    }}
                  ></div>
                  <div className="w-100" style={{ padding: "15px" }}>
                    <p>UI/UX & Graphic Designer</p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3"
                style={{ padding: "5px", height: "50vh", display: "block" }}
              >
                <div
                  className="w-100"
                  style={{ background: "white", textAlign: "center" }}
                >
                  <div
                    className="w-100"
                    style={{
                      width: "100%",
                      minHeight: "45vh",
                      background: "url() center center/cover",
                    }}
                  ></div>
                  <div className="w-100" style={{ padding: "15px" }}>
                    <p>Music Production</p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3"
                style={{ padding: "5px", height: "50vh", display: "block" }}
              >
                <div
                  className="w-100"
                  style={{ background: "white", textAlign: "center" }}
                >
                  <div
                    className="w-100"
                    style={{
                      width: "100%",
                      minHeight: "45vh",
                      background: "url() center center/cover",
                    }}
                  ></div>
                  <div className="w-100" style={{ padding: "15px" }}>
                    <p>Web Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConSkill;
