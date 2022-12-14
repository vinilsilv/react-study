import "./App.css";
import React from "react";

import First from "./components/base/First";
import Person from "./components/base/Person";
import Random from "./components/base/Random";
import Card from "./components/layout/Card";
import Family from "./components/base/Family";
import FamilyMember from "./components/base/FamilyMember";
import StudentsList from "./components/repeat/StudentsList";
import Products from "./components/repeat/Products";
import OddOrEven from "./components/conditional/OddOrEven";
import UserInfo from "./components/conditional/UserInfo";
import DirectParent from "./components/communication/DirectParent";
import IndirectParent from "./components/communication/IndirectParent";
import Input from "./components/form/Input";
import Counter from "./components/counter/Counter";
import Lottery from "./components/lottery/Lottery";

export default () => (
  <div className="App">
    <h1>My First React Project</h1>

    <div className="cards">
      <Card title="#12 - Lottery" color="#594e7d">
        <Lottery amount={8} />
      </Card>

      <Card title="#11 - Counter" color="#A04668">
        <Counter initialNumber={100}></Counter>
      </Card>

      <Card title="#10 - Controlled component" color="#78C3FB">
        <Input></Input>
      </Card>

      <Card title="#09 - Indirect communication" color="#534B62">
        <IndirectParent />
      </Card>

      <Card title="#08 - Direct communication" color="#226CE0">
        <DirectParent />
      </Card>

      <Card title="#07 - Conditional Rendering" color="#B9BAA3">
        <OddOrEven number={20}></OddOrEven>
        <UserInfo user={{ name: "Ferdinand" }}></UserInfo>
        <UserInfo user={{ email: "fer@dinand.com" }}></UserInfo>
        {/* <UserInfo user={{}}></UserInfo>
        <UserInfo></UserInfo> */}
      </Card>

      <Card title="#06 - Products" color="#FF8484">
        <Products></Products>
      </Card>

      <Card title="#05 - Repeat" color="#231651">
        <StudentsList></StudentsList>
      </Card>

      <Card title="#04 - Family member" color="#ac1616">
        <Family familyName="Washington">
          <FamilyMember name="John" />
          <FamilyMember name="Charles" />
          <FamilyMember name="Peter" />
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
