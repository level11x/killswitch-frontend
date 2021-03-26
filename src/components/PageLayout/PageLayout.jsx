import React from 'react'
import { Layout } from 'antd'
import styles from './PageLayout.module.css'
import { HeaderComponent } from './Header/HeaderComponent'

const { Content, Header } = Layout


export const PageLayout = ({ children }) => {
  return (
    <Layout className={styles.pageLayout}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="public/logo192.png" />
          KillSwitch Finance
        </div>
      </div>
      <Layout className="site-layout">
        <Content>
          <div className={styles.contentWrapper}>
            {/* //menu */}
          {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
