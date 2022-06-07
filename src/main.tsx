import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from 'antd'
import {MeetingData, mockData} from './mock-data'
import { HackBackground } from "./components/HackBackground/HackBackground";
import {Timeline} from "./components/Timeline/Timeline";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <HackBackground>
         <Timeline data={mockData} />
     </HackBackground>
  </React.StrictMode>
)
