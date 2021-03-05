import React from 'react';
import Layout from "../../components/layout";
import Head from "next/head";
import GameField from "../../components/GameField";
import { Game } from "../../models/game";

export default function Sudoku() {
  const game = new Game();
  game.generateInitialNumbers();
  console.log("GAME", game)

  return (
    <Layout home={false}>
      <Head>
        <title>Sudoku</title>
      </Head>
      <div>
        <GameField game={game}/>
      </div>
    </Layout>
  )
}

