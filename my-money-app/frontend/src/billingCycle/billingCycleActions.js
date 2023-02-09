import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`)

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {
  return dispatch => {
    axios.post(`${BASE_URL}/billingCycles`, values)
      .then(() => {
        toastr.success('Success', 'Operation was successful')
        dispatch(init())
      })
      .catch(errors => {
        errors.response.data.errors.forEach(error => {
          return toastr.error('Error', error)
        })
      })
  }
}

export function update(values) {
  return dispatch => {
    axios.put(`${BASE_URL}/billingCycles/${values._id}`, values)
      .then(() => {
        toastr.success('Success', 'Operation was successful')
        dispatch(init())
      })
      .catch(errors => {
        errors.response.data.errors.forEach(error => {
          return toastr.error('Error', error)
        })
      })
  }
}

export function showUpdate(billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ]
}
