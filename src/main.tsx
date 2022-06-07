import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from 'antd'
import { mockData } from './mock-data'
import { AgendaCard } from './meeting-card/card'

const { Header, Footer, Content } = Layout;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Layout>
        <Header style={{ color: '#fff' }}>Header</Header>

        <Content style={{ padding: '12px' }}>
          {mockData.agenda.map((v, index) => <AgendaCard key={index} data={v} />)}
        </Content>

        <Footer>Footer</Footer>
      </Layout>
  </React.StrictMode>
)
