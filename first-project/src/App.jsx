import "./App.css";
import React from "react";

import First from "./components/base/First";
import Person from "./components/base/Person";
import Random from "./components/base/Random";
import Card from "./components/base/layout/Card";

export default () => (
  <div className="App">
    <h1>My First React Project</h1>

    <div className="cards">
      <Card title="#03 - Random number challenge" color="#26619c">
        <Random min={1} max={60} />
      </Card>

      <Card title="#02 - Person data" color="#0047ab">
        <Person name="John Doe" age={30} />
      </Card>

      <Card title="#01 - First component" color="#5a4fcf">
        <First></First>
      </Card>
    </div>
  </div>
);
