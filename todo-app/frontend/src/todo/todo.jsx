import React, { Component } from "react";
import axios from 'axios';

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

    this.refresh()
  }

  refresh() {
    axios.get(`${URL}?sort=createdAt`)
      .then(res => this.setState({
        ...this.state,
        description: '',
        list: res.data
      }))
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  handleAdd() {
    const description = this.state.description
    axios.post(URL, { description })
      .then(_ => this.refresh())
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(_ => this.refresh())
  }

  render() {
    return (
      <div>
        <PageHeader name='Tasks' small='Registration' />
        <TodoForm
          description={this.state.description}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd} />
        <TodoList list={this.state.list} handleRemove={this.handleRemove}/>
      </div>
    )
  }
}