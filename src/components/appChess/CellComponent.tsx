import React, { FC } from "react";
import { Cell } from "./models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={[
        "cell-chess",
        `${cell.color}-chess`,
        selected ? "selected-chess" : "",
      ].join(" ")}
      onClick={() => click(cell)}
      style={{ backgroundColor: cell.available && cell.figure ? "green" : "" }}
    >
      {cell.available && !cell.figure && <div className={"available-chess"} />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt={"logo"} />}
    </div>
  );
};

export default CellComponent;
