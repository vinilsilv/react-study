import React, { Component } from 'react'
import Content from '../common/template/content'
import ContentHeader from '../common/template/content-header'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'

export default class extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Payment Cycle' small='Register' />
        <Content>
          <Tabs>
            <TabsHeader></TabsHeader>
            <TabsContent></TabsContent>
          </Tabs>
          Payment Cycles
        </Content>
      </div>
    )
  }
}
