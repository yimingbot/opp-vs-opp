import * as echarts from 'echarts';
import { useEffect } from 'react';

const pathSymbols = {
  city: 'path://M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z',
  amount:
    'path://M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z',
  people: 'path://M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11c-.66 0-1.21.42-1.42 1.01L3 8v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8l-2.08-5.99zM6.5 12c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm11 0c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 7l1.5-4.5h11L19 7H5zm2 13h4v-2l6 3h-4v2z',
};
const labelSetting = {
  show: true,
  position: 'right',
  offset: [10, 0],
  fontSize: 16
};
function makeOption(type: string, symbol?: string) {
  return {
    title: {
      text: 'Operation'
    },
    legend: {
      data: ['DiDi', 'KuaiDi']
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      containLabel: true,
      left: 20
    },
    yAxis: {
      data: ['开通城市', '司机数量(万)', '总融资金额($)/M'],
      inverse: true,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        margin: 30,
        fontSize: 14
      },
      axisPointer: {
        label: {
          show: true,
          margin: 30
        }
      }
    },
    xAxis: {
      splitLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      axisLine: { show: false }
    },
    animationDurationUpdate: 500,
    series: [
      {
        name: 'DiDi',
        id: 'bar1',
        type: type,
        label: labelSetting,
        symbolRepeat: true,
        symbolSize: ['80%', '60%'],
        barCategoryGap: '40%',
        universalTransition: {
          enabled: true,
          delay: function (idx: number, total: number) {
            return (idx / total) * 1000;
          }
        },
        data: [
          {
            value: 24,
            symbol: symbol || pathSymbols.city
          },
          {
            value: 21,
            symbol: symbol || pathSymbols.people
          },
          {
            value: 800,
            symbol: symbol || pathSymbols.amount
          },
        ]
      },
      {
        name: 'KuaiDi',
        id: 'bar2',
        type: type,
        barGap: '10%',
        label: labelSetting,
        symbolRepeat: true,
        symbolSize: ['80%', '60%'],
        universalTransition: {
          enabled: true,
          delay: function (idx: number, total: number) {
            return (idx / total) * 1000;
          }
        },
        data: [
          {
            value: 20,
            symbol: symbol || pathSymbols.city
          },
          {
            value: 29,
            symbol: symbol || pathSymbols.people
          },
          {
            value: 800,
            symbol: symbol || pathSymbols.amount
          },
        ]
      }
    ]
  };
}
const options = [
  makeOption('pictorialBar'),
  makeOption('bar'),
  makeOption('pictorialBar', 'diamond')
];
let optionIndex = 0;
const option = options[optionIndex];

export function Chart() {
  useEffect(() => {
    const chartDom = document.getElementById('chart') as HTMLDivElement;
    const myChart = echarts.init(chartDom);

    setInterval(function () {
      optionIndex = (optionIndex + 1) % options.length;
      myChart.setOption(options[optionIndex]);
    }, 2500);

    option && myChart.setOption(option);
  }, [])

  return <div id='chart' style={{ marginTop: '50px', height: '600px' }}></div>
}