import ReactDOM from 'react-dom/client'
import { BasicChart } from './basic-chart/basic-chart';
import { Chart } from './basic-chart/chart';
import { BasicTable } from './basic-table/table';

const demoSumText = '开通城市数量少4座，司机数量少5万，用户量相同，市场份额多13.3%，DAU差异不大，获客成本少0.4$';
ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(<div style={{}}>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <BasicTable />

    <div style={{ width: '600px', marginLeft: '200px' }}>
      <h2>Market - MAU</h2>
      <BasicChart />

      <Chart />


      <div style={{ cursor: 'pointer' }} onClick={() => readText(demoSumText)}>
        <h2>Text Summary</h2>
        <svg style={{
          display: 'inline-block',
          verticalAlign: 'middle',
          marginRight: '4px'
        }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-volume-up" viewBox="0 0 16 16"> <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" /> <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" /> <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" /> </svg>
        <span>{demoSumText}</span>
      </div>
    </div>
  </div>
</div>)

function readText(text: string) {
  window.speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
