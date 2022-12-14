import React from "react";
import IconButton from "../template/iconButton";

export default props => {

  const renderRows = () => {
    const list = props.list || []

    return list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.description}</td>
        
        <IconButton style='danger' icon='trash' onClick={() => props.handleRemove(todo)}></IconButton>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}