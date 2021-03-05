import React from 'react';
import {Field} from "../Field";
import {Game} from "../../models/game";

export type Props = {
    game: Game;
}

export default function GameField({game}: Props): React.ReactElement {
    return (
        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap'}}>
            {game.data.map(fieldData => <Field fieldData={fieldData} />)}
        </div>
    )
}
