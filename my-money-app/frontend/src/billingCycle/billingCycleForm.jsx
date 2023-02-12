import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props

    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name='name' component={labelAndInput} readOnly={readOnly}
            label='Name' cols='12 4' placeholder='Ex.: John Doe' />
          <Field name='month' component={labelAndInput} readOnly={readOnly} type='number'
            label='Month' cols='12 4' placeholder='Ex.: 02' />
          <Field name='year' component={labelAndInput} readOnly={readOnly} type='number'
            label='Year' cols='12 4' placeholder='Ex.: 2023' />
        </div>
        <div className="box-footer">
          <button type='submit' className='btn btn-primary'>Submit</button>
          <button type='button' className='btn btn-default'
            onClick={this.props.init}>Cancel</button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)