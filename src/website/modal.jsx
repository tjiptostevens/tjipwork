import React from "react";
import "../assets/css/modal.css";

const Modal = () => {
  return (
    <>
      <div className="__modalcontainer">
        <div className="__modalwindow">
          <div className="__modaltitle">
            <div>TITLE</div>
            <div>x</div>
          </div>
          <div className="__modalcameracontainer">
            <div className="__modalcamera"></div>
            <div className="__modaladdbg">+ ADD BACKGROUND</div>
          </div>
          <div className="__modalfxcontainer">
            {[...Array(10)].map((e, i) => {
              i += 1;
              return (
                <div
                  key={i}
                  className="__modalfx"
                  style={{
                    backgroundColor: `rgb(${[...Array(3)].map(
                      (e, i) => Math.random() * (250 - 0) + 0
                    )}`,
                  }}
                ></div>
              );
            })}
          </div>
          <div className="__modalend">
            <button className="__modalbtn __btncancel">CANCEL</button>
            <button className="__modalbtn __btnapply">APPLY</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
