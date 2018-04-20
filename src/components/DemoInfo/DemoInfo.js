import React from "react";
import "./DemoInfo.css";

const DemoInfo = props => {
  return (
    <div className="CaseNote">
      <div className="note">
        <p className="hud">{props.hud}</p>
        <p className="snap">{props.snap}</p>
        <p className="wic">{props.wic}</p>
        <p className="tanf">{props.tanf}</p>
      </div>
    </div>
  );
};

export default DemoInfo;
