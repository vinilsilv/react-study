import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Content from '../common/template/content'
import ContentHeader from '../common/template/content-header'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { init, create, update, remove } from './billingCycleActions'

import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    return (
      <div>
        <ContentHeader title='Payment Cycle' small='Register' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="List" icon="bars" target="tabList" />
              <TabHeader label="Include" icon="plus" target="tabCreate" />
              <TabHeader label="Edit" icon="pencil" target="tabUpdate" />
              <TabHeader label="Delete" icon="trash-o" target="tabDelete" />
            </TabsHeader>

            <TabsContent>
              <TabContent id='tabList'>
                <List/>
              </TabContent>
              <TabContent id='tabCreate'>
                <Form onSubmit={this.props.create}
                  submitLabel='Include' submitClass='primary' />
              </TabContent>
              <TabContent id='tabUpdate'>
                <Form onSubmit={this.props.update}
                  submitLabel='Edit' submitClass='info' />
              </TabContent>
              <TabContent id='tabDelete'>
                <Form readOnly onSubmit={this.props.remove}
                  submitLabel='Delete' submitClass='danger' />
              </TabContent>
            </TabsContent>
          </Tabs>
          Payment Cycles
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  init, create, update, remove
}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)