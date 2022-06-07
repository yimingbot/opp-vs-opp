import { Card } from 'antd'
import styles from './opp.module.scss'
import Typewriter from 'typewriter-effect/dist/core';
import { useLayoutEffect } from 'react';

interface IOppProp {
  list: unknown[];
}

export function Opportunity({ list }: IOppProp) {
  useLayoutEffect(() => {
    new Typewriter('.ant-card-head-title', {
      strings: ['Hello World'],
      autoStart: true,
    });
  }, [])

  return (
    <div className={styles.container}>
      {list.map((v, i) => <Card key={i} title={1} />)}
    </div>
  )
}