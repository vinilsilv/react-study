import { Component } from "react";

export default class Greetings extends Component {

  state = {
    type: this.props.type,
    name: this.props.name
  }

  setType = (e) => {
    const value = e.target.value
    this.setState({ type: value })
  }

  setName = (e) => {
    const value = e.target.value
    this.setState({ name: value })
  }

  render() {
    const { type, name } = this.state
    return (
      <div>
        <h1>{type} {name}!</h1>
        <hr />
        <input type="text" placeholder="Type..." value={type} onChange={this.setType} />
        <input type="text" placeholder="Name..." value={name} onChange={this.setName} />
      </div>
    )
  }
}