/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Rating } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { dataSource, isNumericValue } from '../data-source';
import styles from './table.module.scss';

export function BasicTable() {
  const [inputData, ...rest] = dataSource.slice(0);
  Object.entries(inputData.keyData).forEach(([k, v]) => {
    Object.keys(v).forEach(key => {
      // @ts-ignore
      if (Array.isArray(v[key])) return;
      // @ts-ignore
      v[key] = [v[key], ...rest.map((item => item.keyData[k][key]))];
    })
  })

  const cellWidth = '100px';
  return (
    <Table sx={{ width: '600px' }}>
      <TableHead>
        <TableRow>
          {dataSource.map(v => <TableCell className={styles.title} style={{ width: cellWidth }} key={v.id}>
            {v.companyName}
            <br />
            <Rating value={4.5} precision={0.5} />
          </TableCell>)}
        </TableRow>
      </TableHead>

      <TableBody>
        {Object.entries(inputData.keyData).map(([key, values]) => {

          return <TableRow key={key}>
            <TableCell className={styles.subtitle} style={{ width: '8%' }} align="right" variant="head" component="th" scope="row">{key}</TableCell>
            {Object.entries(values).map(([k, v]) => <TableRow key={'value' + k}>
              <TableCell style={{ width: cellWidth }}>{k}</TableCell>
              {(v as unknown as string[]).map((v2, i) => <TableCell contentEditable={!isNumericValue(v2)} style={{ width: '180px', color: isNumericValue(v) ? 'green' : '' }} key={v2 + i}>{v2}</TableCell>)}
            </TableRow>)}
          </TableRow>
        })}
      </TableBody>
    </Table>
  );
}