import { FC } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import classes from './index.module.scss'
import { OppTable } from "../../opp-table/table";
import SequoiaIcon from '../SequoiaIcon'
import TypeWriter from 'typewriter-effect';
import { SoundOutlined } from '@ant-design/icons';


type TableData = Parameters<typeof OppTable>[0]['data'];
type Props = {
    leftData: TableData;
    rightData: TableData;
}

const defaultText = '阿巴阿巴，阿巴阿巴阿巴阿巴阿巴阿';
const renderPlayWriter = (text: string) => <>
    <SoundOutlined onClick={() => playText(text)} />
    <TypeWriter options={getTypeWriterOptions(text)} />
</>

export const Timeline: FC<Props> = ({ leftData, rightData }) => {
    return <div className={classes.root}>
        <div className={classes.agendaList}>
            <OppTable data={leftData} className={classes.agendaItem} />
            <VerticalTimeline
                className={classes.timeline}
                lineColor={'transparent'}
            >
                <VerticalTimelineElement
                    icon={<SequoiaIcon />}
                    iconClassName={classes.icon}
                    intersectionObserverProps={{
                        rootMargin: '0px 0px 40px 0px'
                    }}
                >
                    {renderPlayWriter(defaultText)}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    icon={<SequoiaIcon />}
                    style={{ marginTop: -70 }}
                    iconClassName={classes.icon}
                >
                    {renderPlayWriter(defaultText)}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    icon={<SequoiaIcon />}
                    position={'right'}
                    style={{ marginTop: 224 }}
                    iconClassName={classes.icon}
                >
                    {renderPlayWriter(defaultText)}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    icon={<SequoiaIcon />}
                    position={'left'}
                    style={{ marginTop: 230 }}
                    iconClassName={classes.icon}
                >
                    {renderPlayWriter(defaultText)}
                </VerticalTimelineElement>
            </VerticalTimeline>
            <OppTable data={rightData} className={classes.agendaItem} isOnRight />
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
        delay: 20,
        autoStart: true,
        strings: text,
    }
}
