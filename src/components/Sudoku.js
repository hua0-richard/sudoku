import React from "react";
import "./Sudoku.css";

import Box from "./Box";

function sudokuData() {
  const sudoku = [];
  for (let i = 0; i < 3; i++) {
    let box = { id: i };
    sudoku.push(box);
  }
  return sudoku;
}

function Sudoku() {
  const s = sudokuData();
  return (
    <div>
      <div className="Grid">
        {s.map((item) => (
          <div className="GridColumn">
            {s.map((item) => (
              <Box />
            ))}
          </div>
        ))}
      </div>
      {/* <div className="ButtonGroup">
        <div className="Button">Random</div>
        <div className="Button">Check</div>
        <div className="Button">Solve</div>
        <div className="Button">Optional</div>
      </div> */}
    </div>
  );
}
export default Sudoku;
