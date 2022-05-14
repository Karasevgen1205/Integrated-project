import { useState } from "react";
import Board from "../board/Board";
import Info from "../info/Info";
import calculateWinner from "../../../services/calculateWinner";
import "./game.scss";

interface IHistory {
  squares: string[];
}

const Game = () => {
  const [history, setHistory] = useState<IHistory[]>([
    {
      squares: Array(9).fill(""),
    },
  ]);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  let status: string;

  const handleClick = (index: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    squares[index] = xIsNext ? "X" : "O";

    setHistory(
      newHistory.concat([
        {
          squares: squares,
        },
      ])
    );
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const moves = history.map((_, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move} className="info__item">
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <section className="game">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="game__wrapper">
              <Board
                squares={current.squares}
                onClick={(i) => handleClick(i)}
              />
              <Info status={status} moves={moves} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
