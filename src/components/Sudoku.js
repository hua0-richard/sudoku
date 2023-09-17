import React, { useEffect } from "react";
import "./Sudoku.css";

import Box from "./Box";

function boxData(a, b) {
  let box = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      let item = { c: a * 3 + i, r: b * 3 + j, value: 0, input: true };
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
      row.push(boxData(i, j));
    }
    sudoku.push(row);
  }
  return sudoku;
}

function flattenSudoku(s) {
  let flat = [];
  for (let i = 0; i < 9; i++) {
    flat.push(new Array(9));
  }
  console.log(s);
  s.forEach((t) => {
    t.forEach((u) => {
      u.forEach((v) => {
        v.forEach((w) => {
          flat[w.r][w.c] = w.value;
        });
      });
    });
  });
  return flat;
}

function copyIntoSudoku(flat, s) {
  s.forEach((t) => {
    t.forEach((u) => {
      u.forEach((v) => {
        v.forEach((w) => {
          w.value = flat[w.r][w.c];
        });
      });
    });
  });
}

function Sudoku() {
  const s = sudokuData();
  useEffect(() => {
    fetch(
      "https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value}}}",
    )
      .then((response) => response.json())
      .then((data) => { copyIntoSudoku(data.newboard.grids[0].value, s)
      console.log(s) });
  });
  return (
    <div>
      <div className="Grid">
        {s.map((x) => (
          <div className="GridColumn">
            {x.map((y) => (
              <Box data={y} />
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
