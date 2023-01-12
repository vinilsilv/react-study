import React, { Component } from 'react'
import Content from '../common/template/content'
import ContentHeader from '../common/template/content-header'

export default class extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Payment Cycle' small='Register' />
        <Content>
          Payment Cycles
        </Content>
      </div>
    )
  }
}
