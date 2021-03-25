import React from 'react'
import { Layout } from 'antd'

import { HeaderComponent } from './Header/HeaderComponent'
import { SidebarComponent } from './Sidebar/SidebarComponent'

const { Content } = Layout


export const PageLayout = ({ children }) => {
  return (
    <Layout >
      <SidebarComponent />
      <Layout className="site-layout">
        <HeaderComponent />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}
