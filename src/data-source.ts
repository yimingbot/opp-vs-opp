export const data = {
  Market: {
    市场规模: '用户量1.8亿',
    市场份额: '43.3%',
    DAU: '401w',
    MAU: '2310w',
    GMV: '$1200M',
    获客成本: '$1.8',
  },
  Operation: {
    成立时间: '2012年',
    核心业务: '快车，专车',
    核心优势:	'智能调度，用户画像',
    开通城市: '24座',
    司机数量: '11万',
    最新轮次: 'D轮',
    总融资金额: '$800M',
    主要融资方: '金沙江，腾讯，淡马锡',
  },
  Risk: {
    负债: '200M',
    诉讼量: '120',
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
    董事会席位: '1',
    股权占比: '4%',
    投资占比: '10%',
  },
  Talent: {
    创始人背景: '程维',
    创始人履历: '高管',
    股权分布: '32%',
  },
}

export const data2 = {
  Market: {
    市场规模: '用户量1.8亿',
    市场份额: '30%',
    DAU: '400w',
    MAU: '2300w',
    GMV: '$1200M',
    获客成本: '$2.2',
  },
  Operation: {
    成立时间: '2012年',
    核心业务: '快车',
    核心优势:	'智能调度',
    开通城市: '20座',
    司机数量: '6万',
    最新轮次: 'D轮',
    总融资金额: '$800M',
    主要融资方: '阿里，软银，老虎',
  },
  Risk: {
    负债: '320M',
    诉讼量: '181',
    舆情: '',
    利益关联方: '阿里巴巴',
  },
  Finance: {
    营收: '$15B',
    毛利: '$80M',
    净利: '-$6B',
    开支: '$350M',
  },
  'Sequoia Position': {
    进入轮次: 'A轮',
    董事会席位: '0',
    股权占比: '2%',
    投资占比: '5%',
  },
  Talent: {
    创始人背景: '陈伟星',
    创始人履历: '连续创业者',
    股权分布: '25%',
  },
}

export const diffColumns: string[] = [];
Object.entries(data).forEach(([key, value]) => {
  Object.entries(value).forEach(([k, v]) => {
    if (/^\d/.test(v) && v !== (data2 as any)[key][k]) {
      diffColumns.push(k);
    }
  })
})
