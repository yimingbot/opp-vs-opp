import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HackBackground } from "./components/HackBackground/HackBackground";
import { Timeline } from "./components/Timeline/Timeline";

const dataSource = {
  Finance: {
    营收: 1,
    毛利: 2,
    净利: 3,
    成本: 3,
    开支: 3,
  },
  Risk: {
    负债: 1,
    诉讼量: 1,
    股权风险: 1,
    政策风险: 1,
    舆情: 1,
  },
  Market: {
    市场份额: 3,
    'DAU/MAU': 1,
    获客成本: 3,
    客单价: 3,
    GMV: 3,
    停留时长: 3,
    付费率: 3,
    市场规模: 3,
  },
  Talent: {
    创始人背景: 1,
    创始人履历: 2,
    股权分布: 2,
  }
}
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HackBackground>
      <Timeline leftData={dataSource} rightData={dataSource} />
    </HackBackground>
  </React.StrictMode>
)
