import React from "react";
import "../assets/css/home.css";
import useMouseGlobal from "../custom/useMouseGlobal";
import Content from "./content";
import Navbar from "./navbar";

const Home = () => {
  const { x, y } = useMouseGlobal();
  return (
    <>
      <div className="w-100">
        <div className="__home">
          <Navbar />
          <Content mouse={{ x, y }} />
        </div>
      </div>
    </>
  );
};

export default Home;
