import React from "react";

import First from "./components/base/First";
import Person from "./components/base/Person";
import Random from "./components/base/Random";

export default () => (
  <>
    <h1>My First React Project</h1>
    <First></First>
    <hr />
    <Person name="John Doe" age={30} />
    <hr />
    <Random min={1} max={60} />
  </>
);
