import { List, Rate } from "antd";
import styles from './table.module.scss'
import classNames from 'classnames';
import { diffColumns } from "../data-source";
import { HeartOutlined } from "@ant-design/icons";

interface ICardProps {
  data: Record<string, object>;
  className?: string;
  isOnRight?: boolean;
  companyName: string;
}

export function OppTable({ data, className, isOnRight, companyName }: ICardProps) {
  const categories = Object.keys(data);

  return <div className={classNames(className, styles.tableContainer)}>
    <div className={styles.companyName}>{companyName}
      <Rate className={styles.rate} allowClear character={<HeartOutlined />} allowHalf/>
    </div>

    {categories.map(v =>
      <div key={v} className={classNames(!isOnRight && 'right')}>
        <List
          header={<div>{v}</div>}
          bordered
          dataSource={Object.entries(data[v])}
          renderItem={item => {
            const shouldHighlight = diffColumns.indexOf(item[0]) !== -1;
            return <List.Item className={shouldHighlight ? styles.highlight : ''}>{item.join(': ')}</List.Item>
          }}
        />
      </div>
    )}
  </div>
}
