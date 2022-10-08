import "./Counter.css";
import React, { Component } from "react";

import Display from "./Display";
import Buttons from "./Buttons";
import StepForm from "./StepForm";

export default class Counter extends Component {
  state = {
    number: this.props.initialNumber || 0,
    step: this.props.initialStep || 5,
  };

  // constructor(props) {
  //     super(props)

  //     this.state = {
  //         number: props.initialNumber
  //     }
  // }

  increase = () => {
    this.setState({
      number: this.state.number + this.state.step,
    });
  };

  decrease = () => {
    this.setState({
      number: this.state.number - this.state.step,
    });
  };

  setStep = (newStep) => {
    this.setState({
      step: newStep,
    });
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <Display number={this.state.number} />
        <StepForm step={this.state.step} setStep={this.setStep}/>
        <Buttons setDec={this.decrease} setInc={this.increase} />
      </div>
    );
  }
}
