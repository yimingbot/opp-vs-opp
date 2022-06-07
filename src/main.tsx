import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from 'antd'
import { Opportunity } from './opp-info/opp'

const { Header, Footer, Content } = Layout;
const oppList = [
  {}
]

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Layout>
        <Header style={{ color: '#fff' }}>Header</Header>

        <Content style={{ padding: '12px' }}>
          <Opportunity list={oppList} />
        </Content>

        <Footer>Footer</Footer>
      </Layout>
  </React.StrictMode>
)
