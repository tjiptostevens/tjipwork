import React from "react";
import "../assets/css/home.css";
import Content from "./content";
import Navbar from "./navbar";

const Home = () => {
  return (
    <>
      <div className="w-100">
        <div className="__home">
          <Navbar />
          <Content />
        </div>
      </div>
    </>
  );
};

export default Home;
