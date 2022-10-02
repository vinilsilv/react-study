import React from "react";

import First from "./components/base/First";
import Person from "./components/base/Person";

export default () => (
  <>
    <h1>My First React Project</h1>
    <First></First>
    <Person name="John Doe" age={30} />
  </>
);
