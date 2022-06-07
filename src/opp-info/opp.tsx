import styles from './opp.module.scss'
import { AgendaCard } from '../meeting-card/card';

interface IOppProp {
  list: unknown[];
}

export function Opportunity({ list }: IOppProp) {
  return (
    <div className={styles.container}>
      {list.map((v, i) => <AgendaCard key={i} />)}
    </div>
  )
}