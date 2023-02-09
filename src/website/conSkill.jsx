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
          <div className="__skillcontainer">
            <div className="w-100">My Skill set</div>
            <div className="w-100" style={{ height: "50px" }}></div>
            <div
              className="col-md-12 col-12"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                overflowX: "auto",
                overflowY: "none",
              }}
            >
              {/* web development */}
              <div
                className="col-md-3 col-11"
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
                      minHeight: "40vh",
                    }}
                  ></div>
                  <div className="w-100" style={{ padding: "15px" }}>
                    <p>Web App Development / SAAS</p>
                  </div>
                </div>
              </div>
              {/* graphic designer */}
              <div
                className="col-md-3 col-11"
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
                      minHeight: "40vh",
                    }}
                  ></div>
                  <div className="w-100" style={{ padding: "15px" }}>
                    <p>UI/UX & Graphic Designer</p>
                  </div>
                </div>
              </div>
              {/* music production */}
              <div
                className="col-md-3 col-11"
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
                      minHeight: "40vh",
                      background: "url() center center/cover",
                    }}
                  ></div>
                  <div className="w-100" style={{ padding: "15px" }}>
                    <p>Music Production</p>
                  </div>
                </div>
              </div>
              {/* data analytics */}
              <div
                className="col-md-3 col-11"
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
                      minHeight: "40vh",
                      background: "url() center center/cover",
                    }}
                  ></div>
                  <div className="w-100" style={{ padding: "15px" }}>
                    <p>Data Analytics</p>
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
