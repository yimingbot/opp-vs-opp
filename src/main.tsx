import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HackBackground } from "./components/HackBackground/HackBackground";
import { Timeline } from "./components/Timeline/Timeline";

const dataSource = {
  Talent: {
    创始人背景: '程维',
    创始人履历: '高管',
    股权分布: '32%',
    创始人风险: '',
  },
  Market: {
    市场规模: '用户量1.8亿',
    市场份额: '43.3%',
    DAU: '500w',
    MAU: '3000w',
    GMV: '$1500M',
    获客成本: '$1.8',
  },
  Operation: {
    成立时间: '2012年',
    核心业务: '快车，专车',
    核心优势:	'智能调度，用户画像',
    开通城市: '24座',
    司机数量: '6万',
    最新轮次: 'D轮',
    总融资金额: '$800M',
    主要融资方: '金沙江，腾讯，淡马锡',
  },
  Risk: {
    负债: '200M',
    诉讼量: 120,
    舆情: '较正向',
    利益关联方: '腾讯',
  },
  Finance: {
    营收: '$12B',
    毛利: '$100M',
    净利: '-$5B',
    开支: '$2B',
  },
  'Sequoia Position': {
    进入轮次: 'B轮',
    董事会席位: 1,
    股权占比: '4%',
    投资占比: '10%',
  }
}

const dataSource2 = {
  Talent: {
    创始人背景: '陈伟星',
    创始人履历: '连续创业者',
    股权分布: '25%',
    创始人风险: '',
  },
  Market: {
    市场规模: '用户量1.8亿',
    市场份额: '56.5%',
    DAU: '400w',
    MAU: '23000w',
    GMV: '$1200M',
    获客成本: '$2.2',
  },
  Operation: {
    成立时间: '2012年',
    核心业务: '快车',
    核心优势:	'',
    开通城市: '28座',
    司机数量: '10万',
    最新轮次: 'D轮',
    总融资金额: '$800M',
    主要融资方: '阿里，软银，老虎',
  },
  Risk: {
    负债: '320M',
    诉讼量: 181,
    舆情: '',
    利益关联方: '',
  },
  Finance: {
    营收: '$15B',
    毛利: '$80M',
    净利: '-$6B',
    开支: '$350M',
  },
  'Sequoia Position': {
    进入轮次: '',
    董事会席位: '',
    股权占比: '',
    投资占比: '',
  }
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HackBackground>
      <Timeline leftData={dataSource} rightData={dataSource2} />
    </HackBackground>
  </React.StrictMode>
)
