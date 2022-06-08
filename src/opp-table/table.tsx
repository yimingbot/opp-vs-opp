import { List, Divider } from "antd";
import { CSSProperties } from "react";
import Typewriter from 'typewriter-effect';
import styles from './table.module.scss'
import classNames from 'classnames';

interface ICardProps {
  data: Record<typeof categories[number], object>;
  className?: string;
  style?: CSSProperties;
}

const categories = ['Talent', 'Finance', 'Risk', 'Market'] as const;
const getTypeWriterOptions = (text: string | string[]) => ({
  delay: 10,
  autoStart: true,
  strings: text,
  loop: true,
})

export function OppTable({ data, className, style }: ICardProps) {
  return <div className={classNames(className, styles.tableContainer)} style={style}>
    {categories.map(v =>
      <div key={v} className={styles.category}>
        <List
          header={<div>{v}</div>}
          bordered
          dataSource={Object.entries(data[v])}
          renderItem={item => (
            <List.Item>{item.join(':')}</List.Item>
          )}
        />
        <Divider orientation="left"><Typewriter options={getTypeWriterOptions('summary')} /></Divider>
      </div>
    )}
  </div>
}
