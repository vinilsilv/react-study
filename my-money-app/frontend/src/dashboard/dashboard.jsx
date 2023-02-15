import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/content-header'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

  componentWillMount() {
    this.props.getSummary()
  }

  render() {
    const { credit, debit } = this.props.summary
    return (
      <div>
        <ContentHeader title='Dashboard' small='Version 1.0' />
        <Content>
          <Row>
            <ValueBox cols='12 4' color='green' icon='bank'
              value={`R$ ${credit}`} text="Credit Total" />
            <ValueBox cols='12 4' color='red' icon='credit-card'
              value={`R$ ${debit}`} text="Debit Total" />
            <ValueBox cols='12 4' color='blue' icon='money'
              value={`R$ ${credit - debit}`} text="Consolidated Value" />
          </Row>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)