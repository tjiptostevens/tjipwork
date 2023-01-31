import React from "react";
import logo from "../assets/img/logo512.png";

const Content = (props) => {
  return (
    <>
      <div className="__content">
        <img src={logo} alt="Logo Tjip Work" height="50px" />
        {props.mouse.x},{props.mouse.y}
      </div>
    </>
  );
};

export default Content;
