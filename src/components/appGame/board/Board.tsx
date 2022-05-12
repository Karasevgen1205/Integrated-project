import Square from "../square/Square";
import "./board.scss";

interface IBoard {
  squares: string[];
  onClick: (index: number) => void;
}

const Board = ({ squares, onClick }: IBoard) => {
  const renderSquare = (index: number) => {
    return <Square value={squares[index]} onClick={() => onClick(index)} />;
  };
  console.log(squares);

  return (
    <div className="board">
      <div className="board__row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board__row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board__row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
