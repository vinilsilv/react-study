import React, { useState } from "react";
import "./Input.css";

export default (props) => {
  const [value, setValue] = useState("Initial value");

  function whenChanged(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input">
      <h2>{value}</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input onChange={whenChanged} value={value} />
        <input readOnly value={value} />
        <input value={undefined} />
        {/* <input value={null} /> */}
      </div>
    </div>
  );
};
