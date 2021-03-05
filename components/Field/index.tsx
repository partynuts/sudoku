import React from 'react';
import {Cell as CellDT} from "../../models/cell";
import {Cell} from '../Cell';

export type Props = {
    fieldData: CellDT[];
}

export function Field({fieldData}: Props): React.ReactElement{

    return (
        <div style={{width: '33%', border: 'solid 2px black', display: 'flex', flexWrap: 'wrap'}}
            className='game-field'>
            {fieldData.map(element => <Cell element={element} />)}
        </div>
    )
}
