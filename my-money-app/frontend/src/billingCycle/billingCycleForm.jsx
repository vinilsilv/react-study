import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly, credits } = this.props

    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name='name' component={LabelAndInput} readOnly={readOnly}
            label='Name' cols='12 4' placeholder='Ex.: John Doe' />
          <Field name='month' component={LabelAndInput} readOnly={readOnly} type='number'
            label='Month' cols='12 4' placeholder='Ex.: 02' />
          <Field name='year' component={LabelAndInput} readOnly={readOnly} type='number'
            label='Year' cols='12 4' placeholder='Ex.: 2023' />
          <ItemList cols="12 6" list={credits} readOnly={readOnly}
            field='credits' subtitle='Credits' />
        </div>
        <div className="box-footer">
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button type='button' className='btn btn-default'
            onClick={this.props.init}>Cancel</button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({credits: selector(state, 'credits')})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)