import React, { Component } from 'react'
import Grid from '../common/layout/grid'
import { Field } from 'redux-form'

class CreditList extends Component {
  renderRows() {
    return (
      <tr>
        <td><Field name="debits[0].name" component='input' /></td>
        <td><Field name="debits[0].value" component='input' /></td>
        <td></td>
      </tr>
    )
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Credits</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    )
  }
}

export default CreditList