import "./App.css";
import React from "react";

import First from "./components/base/First";
import Person from "./components/base/Person";
import Random from "./components/base/Random";
import Card from "./components/layout/Card";
import Family from "./components/base/Family";
import FamilyMember from "./components/base/FamilyMember";
import StudentsList from "./components/repeat/StudentsList";

export default () => (
  <div className="App">
    <h1>My First React Project</h1>

    <div className="cards">
      <Card title="#05 - Repeat" color="#231651">
        <StudentsList></StudentsList>
      </Card>

      <Card title="#04 - Family member" color="#ac1616">
        <Family familyName="Washington">
          <FamilyMember name="John" />
          <FamilyMember name="Charles" />
          <FamilyMember name="Peter"/>
        </Family>
      </Card>

      <Card title="#03 - Random number challenge" color="#ffe610">
        <Random min={1} max={60} />
      </Card>

      <Card title="#02 - Person data" color="#e77000">
        <Person name="John Doe" age={30} />
      </Card>

      <Card title="#01 - First component" color="#594e7d">
        <First></First>
      </Card>
    </div>
  </div>
);
