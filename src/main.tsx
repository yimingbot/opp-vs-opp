import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './index.module.scss'
import { CompareTable } from './compare-table/table'
import { SearchPage } from './search-page/search'

const { Header, Footer, Sider, Content } = Layout;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      <Layout className={styles.appContainer}>
        <Header className={styles.header}>Header</Header>

        <Layout>
          <Sider>
            <Link className={styles.siderLink} to='/s'>search</Link>
            <Link className={styles.siderLink} to='/'>compare</Link>
          </Sider>

          <Content style={{ padding: '12px' }}>
            <Routes>
              <Route index element={<CompareTable />}></Route>
              <Route path='/s' element={<SearchPage />}></Route>
            </Routes>
          </Content>
        </Layout>

        <Footer>Footer</Footer>
      </Layout>
    </BrowserRouter>

  </React.StrictMode>
)
