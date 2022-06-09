import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HackBackground } from "./components/HackBackground/HackBackground";
import { Timeline } from "./components/Timeline/Timeline";
import { data, data2 } from './data-source';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HackBackground>
      <Timeline leftData={data} rightData={data2} />
    </HackBackground>
  </React.StrictMode>
)
