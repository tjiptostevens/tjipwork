import React from "react";
import gantole from "../assets/img/gantole.mp4";

const About = () => {
  return (
    <>
      <div className="w-100" style={{ overflowY: "auto", overflowX: "hidden" }}>
        <div className="w-100" style={{ position: "relative" }}>
          <div
            className="__conabouthero"
            style={{
              height: "90vh",
              width: "90vw",
              position: "relative",
              top: "-75px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              rotate: "-7deg",
              borderRadius: "25px",
            }}
          >
            <div
              style={{
                padding: "0 25px",
                position: "absolute",
              }}
            >
              <video
                src={gantole}
                autoPlay={true}
                muted={true}
                loop={true}
                style={{ height: "100%" }}
              ></video>
            </div>
          </div>
          <div
            className="shake-flying"
            style={{
              position: "absolute",
              top: "70%",
              left: "40%",
            }}
          >
            <div
              style={{
                translate: "-50% -50%",
                color: "coral",
                background: "rgba(0,0,0,0.7)",
                fontSize: "40px",
                fontWeight: "100",
                padding: "25px 50px",
                textAlign: "center",
                whiteSpace: "pre",
                borderRadius: "5px",
                lineHeight: "1.25",
              }}
            >
              {"Unleash the Power of\nProfessional Problem Solving.".toUpperCase()}
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "100px",
              right: "-10px",
              padding: "10px 25px 10px 15px",
              background: "rgba(0,0,0,0.7)",
              color: "coral",
              fontSize: "10px",
              fontWeight: "600",
              borderRadius: "3px 0 0 3px ",
              display: "block",
              rotate: "-7deg",
            }}
          >
            <a
              style={{
                padding: "0 20px",
                cursor: "pointer",
                textDecoration: "none",
                color: "coral",
              }}
              target="_blank"
              href="https://www.pexels.com/video/an-aerial-view-of-hang-gliding-6807323/"
            >
              Video by Cédric Estienne
            </a>
          </div>
        </div>
        <div
          className="__conaboutcontainer"
          style={{ fontSize: "1.25em", fontWeight: "100" }}
        >
          <div className="row col-md-12" style={{ padding: "50px 0" }}>
            <div className="col-md-6"></div>
            <div
              className="col-md-6"
              style={{ padding: "50px", textAlign: "justify" }}
            >
              Do you need an IT expert who can tackle your toughest challenges
              with ease? Look no further! At TJIP.WORK, we offer professional
              problem-solving services that can help you achieve your goals and
              reach your full potential.
            </div>
          </div>
          <div className="row col-md-12" style={{ padding: "50px 0" }}>
            <div
              className="col-md-6"
              style={{ padding: "50px", textAlign: "justify" }}
            >
              With a passion for technology and a commitment to delivering
              outstanding results, our team of experts is dedicated to helping
              you solve your most pressing IT problems. Whether you're looking
              to improve your website, streamline your workflow, or tackle a
              complex technical challenge, we've got you covered.
            </div>{" "}
            <div className="col-md-6"></div>
          </div>
          <div className="row col-md-12" style={{ padding: "50px 0" }}>
            <div className="col-md-6"></div>
            <div
              className="col-md-6"
              style={{ padding: "50px", textAlign: "justify" }}
            >
              At TJIP.WORK, we pride ourselves on our honesty, creativity, and
              dedication to continuous learning. We're always staying ahead of
              the curve and exploring new solutions to help you succeed. Our
              leadership strengths, including futuristic thinking, ideation,
              focus, learner, and command, ensure that we always bring a fresh
              perspective to every project.
            </div>
          </div>
          <div className="row col-md-12" style={{ padding: "50px 0" }}>
            <div
              className="col-md-6"
              style={{ padding: "50px", textAlign: "justify" }}
            >
              So why wait? Let us help you take your IT goals to the next level.
              Contact us today and discover the power of professional problem
              solving with TJIP.WORK."
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
