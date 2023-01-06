import React, { Component } from 'react'

import ContentHeader from '../common/template/content-header'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Dashboard' small='Version 1.0' />
        <Content>
          <Row>
            <ValueBox cols='12 4' color='green' icon='bank'
              value="R$ 10" text="Credit Total" />
            <ValueBox cols='12 4' color='red' icon='credit-card'
              value="R$ 10" text="Debit Total" />
            <ValueBox cols='12 4' color='blue' icon='money'
              value="R$ 0" text="Consolidated Value" />
          </Row>
        </Content>
      </div>
    )
  }
}

export default Dashboard