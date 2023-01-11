import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/content-header'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard2 extends Component {

  constructor(props) {
    super(props)
    this.state = { credit: 0, debt: 0 }
  }

  componentWillMount() {
    axios.get(`${BASE_URL}/billingCycles/summary`)
      .then(resp => this.setState(resp.data))
  }

  render() {
    const { credit, debt } = this.state
    return (
      <div>
        <ContentHeader title='Dashboard' small='Version 2.0' />
        <Content>
          <Row>
            <ValueBox cols='12 4' color='green' icon='bank'
              value={`R$ ${credit}`} text="Credit Total" />
            <ValueBox cols='12 4' color='red' icon='credit-card'
              value={`R$ ${debt}`} text="Debt Total" />
            <ValueBox cols='12 4' color='blue' icon='money'
              value={`R$ ${credit - debt}`} text="Consolidated Value" />
          </Row>
        </Content>
      </div>
    )
  }
}
