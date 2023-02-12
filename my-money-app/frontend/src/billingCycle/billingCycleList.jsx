import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleActions'

class BillingCycleList extends Component {

  componentWillMount() {
    this.props.getList()
  }

  renderRows() {
    const list = this.props.list || []

    return list.map(data => (
      <tr key={data._id}>
        <td>{data.name}</td>
        <td>{data.month}</td>
        <td>{data.year}</td>
        <td>
          <button className="btn btn-warning" onClick={() => this.props.showUpdate(data)}>
            <i className="fa fa-pencil"></i>
          </button>
          <button className="btn btn-danger" onClick={() => this.props.showDelete(data)}>
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Month</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)