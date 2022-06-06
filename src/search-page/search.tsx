import { useCallback, useState } from "react"
import { Card, Input } from 'antd';
import styles from './search.module.scss'
import { defaultCompanyList } from "./company-list";

const { Search } = Input;

export function SearchPage() {
  const [companyList, setCompanyList] = useState(defaultCompanyList)
  const onSearch = useCallback((value: string) => {
    setCompanyList(defaultCompanyList.filter(v => v.title.includes(value)))
  }, [])

  return <div>
    <Search
      placeholder="input search text"
      size="large"
      enterButton="Search"
      onSearch={onSearch}
    />

    <div className={styles.cards}>
    {companyList.map(v => 
      <Card className={styles.item} key={v.id} title={v.title} extra={<a href="#">More</a>}>
        <p>{v.name}</p>
      </Card>
    )}
    </div>
  </div>
}
