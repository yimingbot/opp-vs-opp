import { Card, Button, Modal } from "antd";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import styles from './card.module.scss'

const defaultAvatar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAMFBMVEXFxcX////CwsL8/Pz09PTY2NjIyMjV1dXNzc2/v7/v7+/g4OD39/fp6enR0dHl5eXsJEGZAAAC00lEQVR4nO2ay5qDIAyFFRTxUn3/tx0Y60dbbUniSe2CfzU7zkBOkiZWVaFQKBQKhUKhUFDARC47vO+N79q27XwV/vz68dU8DnWiGTv3TRHGjY2tX5gWX31JhJlvr6ffGdpvSDDu3fn/GmZ1DWbcXf8zN2VvuOHz+TEovaIE45qsgECnJsHMlPMDWgFpukwIJEYlCdTzAzqWIMXAHasQjuZTGtgzObiAkSUg5gWwAkeOwg2wJ83CFVA3WAWeLQBsSWYY3i8BKEAQBRFgJLCNsDIAnyFfEY+wHibAix4hVCiUANPKBOCyksgJEduDFPTCR6gtSIBcQd2BFMiyQQTVLFGbsz2gxCy2QlEAVHB9HPyAF67PB/0kFIDLiZfXBbEZBpQCeX+Aa5I4P9gSwB7pB/pEJ1KAHCOIuqQJd34lS8wjVIHgErBX8AO/nfl2QBrhLoH3uwk/Qwmw6pPKKIszQ9CZKP7APJEsQUtAkOBJsaA3V65Is/VJe8WQ2y8M6qse46/esVTtp4doWuUrCBeQs4O9ae5Y3EKxo100MnIVd6zZ/z/dg8YO1rSc+mzhadkQEsEzA3YLzCgJ6RqQqVHYrePKA7M5SaD6JNqa85AG4ksvFxBXwOcFOOnwYOV8v3hSAEDCmSdYObnskbrgkeHE+YId3xGL2JQnRpnPiIuEdHizQzxMOR+FG7JoFBaDYyQlgvzJBw1JB4swYoJvSegbRNjvYFA+2LBMBaBc9AgzL8lXCm+xrBKlcAXMS4Blw0c4mRFuhBWOHc62JccwZpydigDG2qnHpsMEeeeiYMUVsiF14jBCHLeLfyLlof6IUhNQ17QrQHWHR5A6RvF3LxRoX+fg2sM9pIZx1vJixM6ER9AMA1IgqIYBKRB6zTAIgUBIzDp1cYNQH1WakwShTdGqzBvZCq1sBYIZlBq0RLZVE39zQuWWM4NiaV7JFmijmw4OPuX+A0sGI4O+4EOyAAAAAElFTkSuQmCC'

export function AgendaCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const headerSelector = '.ant-card-head-title';
    new Typewriter(cardRef.current?.querySelector(headerSelector), {
      strings: ['Hello World'],
      autoStart: true,
      loop: true,
    })
  }, [])

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showFilesModal = useCallback(() => {
    setIsModalVisible(true)
  }, [])

  return <Card ref={cardRef} title={1} className={styles.wrapper}>
    <p className={styles.title}>上会信息</p>
    <div className={styles.info}>
      <div>项目阶段: <span className={styles.text}>Seed</span></div>
      <div>决策状态: <span className={styles.text}>Intro</span></div>
      <div>项目轮次: <span className={styles.text}>暂无明确轮次</span></div>
      <div>基金名称: <span className={styles.text}>暂无</span></div>
      <div>币种: <span className={styles.text}>暂无</span></div>
      <div>估值: <span className={styles.text}>$100M 以下</span></div>
      <div>Sourcer: <span className={styles.text}>Yiming Zhou</span></div>
      <div>Deal Term: <span className={styles.text}>本轮投前估值 USD 1 M，SCC 投资 USD 1 M，占比 33.33%，本轮总融资金额 USD 2 M</span></div>
    </div>

    <p className={styles.title}>项目组成员</p>
    <div className={styles.info}>
      <div className={styles.team}>投资团队: <div className={styles.avatars}><img className={styles.img} src={defaultAvatar} />Yiming</div></div>
      <div className={styles.team}>支持团队: <div className={styles.avatars}><img className={styles.img} src={defaultAvatar} />Yuhan</div></div>

    </div>

    <Button onClick={showFilesModal} type="primary">files</Button>
    <Modal title="files" visible={isModalVisible} onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)}>
      <p>Some files...</p>
    </Modal>
  </Card>
}
