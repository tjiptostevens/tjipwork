import React from "react";

const Content = (props) => {
  return (
    <>
      <div className="__content">
        {props.mouse.x},{props.mouse.y}
      </div>
    </>
  );
};

export default Content;
