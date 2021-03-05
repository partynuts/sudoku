import React from 'react';
import {Cell as CellDt} from '../../models/cell';

export type Props = {
    element: CellDt;
}

export function Cell({ element }: Props): React.ReactElement {
  return (
    <div style={{ width: '65px', height: '65px', border: '1px solid grey', display: 'flex', justifyContent: 'center' }}>
      <span style={{alignSelf: 'center'}}>{element.number}</span>
    </div>
  )
}
