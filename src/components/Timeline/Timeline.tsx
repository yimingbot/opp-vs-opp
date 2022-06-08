import React, { FC } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import classes from './index.module.scss'
import { OppTable } from "../../opp-table/table";
import SequoiaIcon from '../SequoiaIcon'


type TableData = Parameters<typeof OppTable>[0]['data'];
type Props = {
    leftData: TableData;
    rightData: TableData;
}

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
                    <p>
                        阿巴阿巴，阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
                    </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    icon={<SequoiaIcon />}
                    style={{ marginTop: -70 }}
                    iconClassName={classes.icon}
                >
                    <p>
                        阿巴阿巴，阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    icon={<SequoiaIcon />}
                    position={'right'}
                    style={{ marginTop: 224 }}
                    iconClassName={classes.icon}
                >
                    <p>
                        阿巴阿巴，阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    icon={<SequoiaIcon />}
                    position={'left'}
                    style={{ marginTop: 230 }}
                    iconClassName={classes.icon}
                >
                    <p>
                        阿巴阿巴，阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <OppTable data={rightData} className={classes.agendaItem} />
        </div>
    </div>
}