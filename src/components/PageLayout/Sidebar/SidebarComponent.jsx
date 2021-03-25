import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'


const { Sider } = Layout

const { SubMenu } = Menu



export const SidebarComponent = () => {
  return (
    <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title="subnav 1">
            <Menu.Item key="1">Killswitch</Menu.Item>
            <Menu.Item key="2">LP Summary</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

  )
}
