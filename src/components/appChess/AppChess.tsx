import React, { useEffect, useState } from "react";
import "./appChess.css";
import BoardComponent from "./BoardComponent";
import { Board } from "./models/Board";
import { Player } from "./models/Player";
import { Colors } from "./models/Colors";
import LostFigures from "./LostFigures";
import Timer from "./Timer";

const AppChess = () => {
  const [board, setBoard] = useState(new Board());
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(new Player(Colors.WHITE));
  }, []);

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE
        ? new Player(Colors.BLACK)
        : new Player(Colors.WHITE)
    );
  }

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  return (
    <div className="app-chess">
      <Timer currentPlayer={currentPlayer} restart={restart} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures title="White figures" figures={board.lostWhiteFigures} />
        <LostFigures title="Black figures" figures={board.lostBlackFigures} />
      </div>
    </div>
  );
};

export default AppChess;
