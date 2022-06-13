import * as echarts from 'echarts';
import { useEffect } from 'react';

const option = {
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    },
    {
      data: [100, 120, 150, 180, 270, 300, 200],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};

export function BasicChart() {
  useEffect(() => {
    const chartDom = document.getElementById('basic-chart') as HTMLDivElement;
    const myChart = echarts.init(chartDom);
    myChart.setOption(option);
  }, [])

  return <div id='basic-chart' style={{ height: '500px' }}></div>
}
