import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import { siteSettings } from "./config/setting";
import Maintenance from "./website/maintenance";
import Page404 from "./website/page404";

function App() {
  if (siteSettings.mode === "0") {
    return <Maintenance />;
  }
  return (
    <div className="App">
      <Routes>
        {routes.web.map((route) => (
          <Route
            exact
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
        <Route path={"/*"} element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
