import { List, Divider } from "antd";
import { CSSProperties } from "react";
import styles from './table.module.scss'
import classNames from 'classnames';

interface ICardProps {
  data: Record<string, object>;
  className?: string;
  style?: CSSProperties;
  isOnRight?: boolean;
}

export function OppTable({ data, className, style, isOnRight }: ICardProps) {
  const categories = Object.keys(data);

  return <div className={classNames(className, styles.tableContainer)} style={style}>
    {categories.map(v =>
      <div key={v} className={classNames(styles.category, !isOnRight && 'right')}>
        <List
          header={<div>{v}</div>}
          bordered
          dataSource={Object.entries(data[v])}
          renderItem={item => (
            <List.Item>{item.join(':')}</List.Item>
          )}
        />
        <Divider orientation={isOnRight ? 'left' : 'right'}></Divider>
      </div>
    )}
  </div>
}
