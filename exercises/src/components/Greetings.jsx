import React, { Component } from "react";

export default class Greetings extends Component {
  
  

  constructor(props) {
    super(props)
    this.state = {
      type: this.props.type,
      name: this.props.name
    }
    this.setMyType = this.setMyType.bind(this)
  }

  setMyType(e) {
    this.setState({ type: e.target.value })
  }

  setName(e) {
    let value = e.target.value
    this.setState({ name: value })
  }

  render() {
    const { type, name } = this.state
    return (
      <div>
        <h1>{type} {name}!</h1>
        <hr />
        <input type="text" placeholder="Type..." value={type} onChange={this.setMyType} />
        <input type="text" placeholder="Name..." value={name} onChange={e => this.setName(e)} />
      </div>
    )
  }
}