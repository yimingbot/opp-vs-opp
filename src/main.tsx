import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HackBackground } from "./components/HackBackground/HackBackground";
import { Timeline } from "./components/Timeline/Timeline";
import { data, data2 } from './data-source';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <HackBackground>
      <Timeline leftData={data} rightData={data2} />
    </HackBackground>
  </React.StrictMode>
)
