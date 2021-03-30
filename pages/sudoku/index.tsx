import React, {useState} from 'react';
import Layout from "../../components/layout";
import Head from "next/head";
import GameField from "../../components/GameField";
import {Game} from "../../models/game";
import {validateGame} from "../../models/validations/gameValidator";

export default function Sudoku() {
    const [validationMsg, setValidationMsg] = useState(undefined);

    const game = new Game();
    game.generateInitialNumbers();

    function validateResult(e: any, game: Game) {
        if (!validateGame(game)) {
            setValidationMsg('Your result is wrong.');
        } else {
            setValidationMsg('Your result is correct.')
        }
    }


    return (
        <Layout home={false}>
            <Head>
                <title>Sudoku</title>
            </Head>
            <div>
                <GameField game={game} />
            </div>
            <button onClick={e => {
                validateResult(e, game)
            }}>Submit
            </button>
            <div>
                {validationMsg}
            </div>
        </Layout>
    )
}


