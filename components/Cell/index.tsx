import React, {useState} from 'react';
import {Cell as CellDt} from '../../models/cell';

export type Props = {
    element: CellDt;
}

export function Cell({element}: Props): React.ReactElement {
    const [activeField, setActiveField] = useState(false);
    // let active = false;

    function insertNumber(e: any, element: CellDt) {
        e.preventDefault();

        element.number = Number(e.target.value);
    }

    function markCell(e: any) {
        e.preventDefault();
        console.log("PASSIERT WAS?")
        setActiveField(true);
        // active = true
    }

    function unmarkCell(e: any) {
        e.preventDefault();
        setActiveField(false)
    }

    return (
        <div className={activeField ? 'cell-container active-field' : 'cell-container'}>
            {element.readOnly ?
                <span style={{alignSelf: 'center'}}>{element.number}</span>
                :
                <input
                    value={element.number?.toString()}
                    type='number'
                    min={1}
                    max={9}
                    onChange={e => insertNumber(e, element)}
                    onFocus={e => markCell(e)}
                    onBlur={e => unmarkCell(e)}
                />
            }
        </div>
    )
}


