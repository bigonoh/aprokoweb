import React, { useState } from "react";
import togle from "./toggle.module.css";

function Toggle(props) {
  let type = props.type ? props.type : "rounded";
  return (
    <div>
      {type === "rectangle" && (
        <label className={togle.switch}>
          <input type="checkbox" />
          <span className={togle.slider}></span>
        </label>
      )}

      {type === "rounded" && (
        <label className={togle.switch}>
          <input
            type="checkbox"
            onChange={(e) => props.value(e.target.value)}
            value={props.value}
          />
          <span className={`${togle.slider} + ${togle.round}`}></span>
        </label>
      )}
    </div>
  );
}

export default Toggle;
