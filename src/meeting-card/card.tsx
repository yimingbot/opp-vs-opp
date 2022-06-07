import { Card, Button, Modal, Avatar } from "antd";
import { CSSProperties, useCallback, useLayoutEffect, useRef, useState } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import styles from './card.module.scss'
import { UserOutlined } from '@ant-design/icons';
import { MeetingData } from "../mock-data";
import classNames from 'classnames';

interface ICardProps {
  data: MeetingData['agenda'][number];
  className?: string;
  rootStyle?: CSSProperties
}

function getAvgScore(data: ICardProps['data']): string {
  const { icData, teamData } = data.rating
  const total = [...icData, ...teamData].reduce((prev, cur) => prev + Number(cur.rating), 0)
  const score = (total / (icData.length + teamData.length)).toFixed(1)
  return Number.isNaN(score) ? '' : score
}

export function AgendaCard({ data, className, rootStyle }: ICardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    new Typewriter(cardRef.current?.querySelector(`.${styles.summary}`) as HTMLElement, {
      strings: ['this is a summary this is a summary this is a summary this is a summary'],
      autoStart: true,
      loop: true,
      delay: 10,
    })
  }, [])

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showFilesModal = useCallback(() => {
    setIsModalVisible(true)
  }, [])

  const { dealTermComputed } = data;
  return <Card ref={cardRef} title='公司名称' style={rootStyle} className={classNames(className, styles.wrapper)}>
    <p className={styles.title}>上会信息</p>
    <div className={styles.info}>
      <div>项目阶段: <span className={styles.text}>{data.meetingDecisionStatus}</span></div>
      <div>决策状态: <span className={styles.text}>{data.staging}</span></div>
      <div>项目轮次: <span className={styles.text}>{data.round ?? '暂无明确轮次'}</span></div>
      <div>估值: <span className={styles.text}>{dealTermComputed.valuation}</span></div>
      <div>Deal Term: <span className={styles.text}>{dealTermComputed.summary}</span></div>
    </div>

    <p className={styles.title}>项目组成员</p>
    <div className={styles.info}>
      <div className={styles.team}>
        投资团队:
        <div className={styles.avatars}><Avatar className={styles.icon} size={30} icon={<UserOutlined />}/>Yiming</div>
      </div>
      <div className={styles.team}>
        支持团队:
        <div className={styles.avatars}><Avatar className={styles.icon} size={30} icon={<UserOutlined />}/>Yuhan</div>
      </div>
    </div>

    <p className={styles.title}>项目评分: {getAvgScore(data)}</p>

    <Button onClick={showFilesModal} type="primary">files</Button>
    <Modal title="files" visible={isModalVisible} onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)}>
      <p>Some files...</p>
    </Modal>

    <div className={styles.summary}></div>
  </Card>
}
