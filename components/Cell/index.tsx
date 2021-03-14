import React from 'react';
import {Cell as CellDt} from '../../models/cell';

export type Props = {
    element: CellDt;
}

export function Cell({element}: Props): React.ReactElement {
    return (
        <div className='cell-container'>
            {element.readOnly ?
                <span style={{alignSelf: 'center'}}>{element.number}</span>
                :
                <input
                    value={element.number?.toString()}
                    type='number'
                    min={1}
                    max={9}
                    onChange={e => insertNumber(e, element)}
                />
            }
        </div>
    )
}

function insertNumber(e: any, element: CellDt) {
    e.preventDefault();

    element.number = Number(e.target.value);
}
