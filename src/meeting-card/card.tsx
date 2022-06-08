import { Card, Button, Modal, Avatar } from "antd";
import { CSSProperties, useCallback, useLayoutEffect, useRef, useState } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import styles from './card.module.scss'
import { UserOutlined, FileWordOutlined, FilePdfOutlined, FileImageOutlined, FileExcelOutlined  } from '@ant-design/icons';
import { MeetingData } from "../mock-data";
import classNames from 'classnames';

interface ICardProps {
  data: MeetingData['rows'][number];
  className?: string;
  rootStyle?: CSSProperties
}

function DefaultTeam() {
  return <>
    <div className={styles.team}>
      投资团队:
      <div className={styles.avatars}><Avatar className={styles.icon} size={30} icon={<UserOutlined />} />Yiming</div>
    </div>
    <div className={styles.team}>
      支持团队:
      <div className={styles.avatars}><Avatar className={styles.icon} size={30} icon={<UserOutlined />} />Yuhan</div>
    </div>
  </>
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

  const { agenda, meeting } = data;
  const { opportunity, dealTermComputed } = agenda;
  return <Card ref={cardRef} title={meeting.title} style={rootStyle} className={classNames(className, styles.wrapper)}>
    <p className={styles.title}>项目组成员</p>
    <div className={styles.info}>
      <DefaultTeam />
    </div>

    <p className={styles.title}>上会信息</p>
    <div className={styles.info}>
      <div>项目阶段: <span className={styles.text}>{agenda.staging}</span></div>
      <div>决策状态: <span className={styles.text}>{agenda.meetingDecisionStatus}</span></div>
      <div>项目轮次: <span className={styles.text}>{agenda.round ?? '暂无明确轮次'}</span></div>
      <div>基金名称: <span className={styles.text}>{agenda.fundNames.join(' ')}</span></div>
      <div>币种: <span className={styles.text}>{agenda.currencies.join(' ')}</span></div>
      <div>估值: <span className={styles.text}>{opportunity.valuationUsdStr}</span></div>
      <div>Deal Sourcing 来源: <span className={styles.text}>{opportunity.nonUserDealSourcers?.join(' ')}</span></div>
      <div>Deal Term: <span className={styles.text}>{dealTermComputed.summary}</span></div>
    </div>

    <Button style={{ marginBottom: '10px' }} onClick={showFilesModal} type="primary">files</Button>
    <Modal title="相关文件" visible={isModalVisible} onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)}>
      <div className={styles.fileItem}>
        <span><FileWordOutlined/>这是一个word文件</span>
        <span>Colin Guo • 2022年3月7日 • 12KB</span>
      </div>
      <div className={styles.fileItem}>
        <span><FileExcelOutlined/>这是一个excel文件</span>
        <span>Colin Guo • 2022年3月7日 • 12KB</span>
      </div>
      <div className={styles.fileItem}>
        <span><FileImageOutlined/>这是一个image文件</span>
        <span>Colin Guo • 2022年3月7日 • 12KB</span>
      </div>
      <div className={styles.fileItem}>
        <span><FilePdfOutlined/>这是一个pdf文件</span>
        <span>Colin Guo • 2022年3月7日 • 12KB</span>
      </div>
    </Modal>

    <p className={styles.title}>项目评分</p>
    <p className={styles.title}>补充说明</p>
    <p className={styles.title}>会前 Q&A</p>
    <p className={styles.title}>会后 To-Do</p>

    <div className={styles.summary}></div>
  </Card>
}
