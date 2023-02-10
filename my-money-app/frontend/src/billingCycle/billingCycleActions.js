import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`)

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {
  axios.post(`${BASE_URL}/billingCycles`, values)
    .then(() => {
      toastr.success('Success', 'Operation was successful')
    })
    .catch(errors => {
      errors.response.data.errors.forEach(error => {
        return toastr.error('Error', error)
      })
    })

  return {
    type: 'TEMP'
  }
}