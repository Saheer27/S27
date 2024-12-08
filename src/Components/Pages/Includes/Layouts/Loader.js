import React from "react";
import S27 from "../../../../Assets/Modules/img/S27.png";

const Loader = () => {
  return (
    <>
      <div className="loader-bg">
        <h3 className="loader-text">
          <img src={S27} alt="" />
          Loading
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </h3>
      </div>
    </>
  );
};

export default Loader;
