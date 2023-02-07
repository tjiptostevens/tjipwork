import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import { siteSettings } from "./config/setting";
import Home from "./website/home";
import Maintenance from "./website/maintenance";
import Page404 from "./website/page404";

function App() {
  if (siteSettings.mode === "0") {
    return <Maintenance />;
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/*"} element={<Home />} />
        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
