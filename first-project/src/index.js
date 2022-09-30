import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

import First from "./components/base/First";
import Person from "./components/base/Person";

// ReactDOM.render(
//   <span>
//     <First></First>
//     <Parameter title="Title" subtitle="Subtitle"></Parameter>
//   </span>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <First></First>
    <Person name="John Doe" age={30}/>
  </div>
);
