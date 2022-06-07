import React, { FC } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MeetingData} from '../../mock-data';

import classes from './index.module.scss'
import {AgendaCard} from "../../meeting-card/card";

import SequoiaIcon from '../SequoiaIcon'


type Props = {
   data: MeetingData
}

export const Timeline: FC<Props> = ({ data }) => {
    return <div className={classes.root}>
        <VerticalTimeline
            className={classes.timeline}
            layout={'1-column-left'}
            lineColor={'#0f0'}
        >
            <VerticalTimelineElement
                icon={<SequoiaIcon/>}
                date={'2002 - 2006'}
                iconClassName={classes.icon}
                intersectionObserverProps={{
                    rootMargin: '0px 0px 40px 0px'
                }}
            >
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                icon={<SequoiaIcon/>}
                iconClassName={classes.icon}
            >
                <p>
                    123123asddasdasdfasdf
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        <div className={classes.agendaList}>
            {data.agenda.map((v, index) => <AgendaCard key={index} data={v} className={classes.agendaItem} />)}
        </div>
    </div>
}