import React from "react";
import "../assets/css/content.css";
import useWindow from "../custom/useWindow";
import ConHai from "./conHai";
import ConSkill from "./conSkill";

const Content = (props) => {
  const { width } = useWindow();
  return (
    <>
      <div className="__content">
        <ConHai />
        <ConSkill />
      </div>
    </>
  );
};

export default Content;
