import { FC } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import classes from './index.module.scss'
import { OppTable } from "../../opp-table/table";
import TypeWriter from 'typewriter-effect';
import { ArrowDownOutlined, ArrowUpOutlined, SoundOutlined } from '@ant-design/icons';
import { Statistic } from 'antd';


type TableData = Parameters<typeof OppTable>[0]['data'];
type Props = {
  leftData: TableData;
  rightData: TableData;
}

const renderTypeWriter = (text: string, sector: string) => <>
  <div className={classes.sound} onClick={() => playText(text)}><span>{sector}</span><SoundOutlined/></div>
  <TypeWriter options={getTypeWriterOptions(text)} />
</>

export const Timeline: FC<Props> = ({ leftData, rightData }) => {
  return <div className={classes.root}>
    <div className={classes.agendaList}>
      
      <OppTable data={leftData} className={classes.agendaItem} companyName="滴滴出行" />
      <VerticalTimeline
        className={classes.timeline}
        lineColor={'transparent'}
      >
        <VerticalTimelineElement
          icon={<img src='https://freesvg.org/img/PixelCharacter.png' className={classes.avatar} />}
          position='left'
          iconClassName={classes.icon}
          intersectionObserverProps={{
            rootMargin: '0px 0px 40px 0px'
          }}
          style={{ marginTop: 40 }}
        >
          {renderTypeWriter('用户量相同，市场份额多13.3%，DAU/MAU/GMV差异不大，但获客成本少0.4$', 'Market')}
          <Statistic
            value={13.3}
            valueStyle={{ color: '#0f0' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          icon={<img src='https://freesvg.org/img/1543379970.png' className={classes.avatar} />}
          position='right'
          style={{ marginTop: 200 }}
          iconClassName={classes.icon}
        >
          {renderTypeWriter('开通城市数量少4座，司机数量少5万', 'Operation')}
          <Statistic
            value={5}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix='万'
          />
        </VerticalTimelineElement>
      </VerticalTimeline>
      <OppTable data={rightData} className={classes.agendaItem} isOnRight companyName="快的出行" />
    </div>
  </div>
}

function playText(text: string) {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

function getTypeWriterOptions(text: string | string[]) {
  return {
    delay: 30,
    autoStart: true,
    strings: text,
  }
}
