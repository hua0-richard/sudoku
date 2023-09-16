import React from "react";
import "./Sudoku.css";

import Box from "./Box";

function boxData() {
  let box = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      let item = { id: i.toString() + " " + j.toString(), input:  true};
      row.push(item);
    }
    box.push(row);
  }
  return box; 
}

function sudokuData() {
  let sudoku = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(boxData());
    }
    sudoku.push(row);
  }
  return sudoku; 
}

function Sudoku() {
  const boxes = [1, 2, 3];
  const s = sudokuData();
  return (
    <div>
      <div className="Grid">
        {s.map((x) => (
          <div className="GridColumn">
            {x.map((y) => (
              <Box data={y}/>
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
