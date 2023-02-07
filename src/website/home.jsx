import React from "react";
import { Route, Routes } from "react-router-dom";
import rute from "../config/routes";
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
          <Routes>
            {rute.web.map((r) => (
              <Route exact key={r.path} path={r.path} element={r.element} />
            ))}
          </Routes>
          {/* <Content mouse={{ x, y }} /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
