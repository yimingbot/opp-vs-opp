import { Card, Button, Modal, Avatar } from "antd";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import styles from './card.module.scss'
import { UserOutlined } from '@ant-design/icons';
import { mockData } from "../mock-data";


interface ICardProps {
  data: typeof mockData['agenda'][number];
}
export function AgendaCard({ data }: ICardProps) {
  console.log(data);
  
  const { dealTermComputed } = data;
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

  return <Card ref={cardRef} title='公司名称' className={styles.wrapper}>
    <p className={styles.title}>上会信息</p>
    <div className={styles.info}>
      <div>项目阶段: <span className={styles.text}>{data.meetingDecisionStatus}</span></div>
      <div>决策状态: <span className={styles.text}>{data.staging}</span></div>
      <div>项目轮次: <span className={styles.text}>{data.round ?? '暂无明确轮次'}</span></div>
      {/* <div>基金名称: <span className={styles.text}>{data. ?? '暂无'}</span></div> */}
      {/* <div>币种: <span className={styles.text}>暂无</span></div> */}
      <div>估值: <span className={styles.text}>{dealTermComputed.valuation}</span></div>
      {/* <div>Sourcer: <span className={styles.text}>Yiming Zhou</span></div> */}
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

    <p className={styles.title}>补充说明</p>
    <p className={styles.title}>项目评分</p>

    <Button onClick={showFilesModal} type="primary">files</Button>
    <Modal title="files" visible={isModalVisible} onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)}>
      <p>Some files...</p>
    </Modal>

    <div className={styles.summary}></div>
  </Card>
}
