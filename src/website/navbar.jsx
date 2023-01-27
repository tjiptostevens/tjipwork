import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="__navbar">
        <div className="__nlogocontainer">
          <div className="__nlogo">Logo</div>
        </div>
        <div className="w-100" style={{ height: "50px" }}></div>

        <div className="__nlinkcontainer">
          <div className="__nlink">ABOUT</div>
        </div>
        <div className="__nsocialcontainer">
          <div className="__nsocial">ig</div>

          <div className="__nsocial">hac</div>
          <div className="__nsocial">git</div>
        </div>

        <div className="w-100" style={{ height: "25px" }}></div>
      </div>
    </>
  );
};

export default Navbar;
