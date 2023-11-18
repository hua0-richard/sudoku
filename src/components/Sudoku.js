import React, { useState } from "react";
import "./Sudoku.css";
import Box from "./Box";
import StopWatch from "./StopWatch";

function Sudoku() {
  const [titleScreen, setTitleScreen] = useState(true);
  const [doneLoading, setLoading] = useState(false);
  const [s, sets] = useState(sudokuData());
  const [solution, setSolution] = useState(null);

  function newGame() {
    getNewSudoku();
  }

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

  function copyIntoSudoku(flat, s_prime) {
    let s = s_prime;
    s.forEach((t) => {
      t.forEach((u) => {
        u.forEach((v) => {
          v.forEach((w) => {
            w.value = flat[w.r][w.c];
          });
        });
      });
    });
    return s;
  }

  function getNewSudoku() {
    setLoading(false);
    setTitleScreen(false);
    fetch(
      "http://localhost:3001/api",
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result)
        setSolution(data.result);
        let temp = copyIntoSudoku(data.result, s);
        sets(temp);
        setLoading(true);
      });
  }

  return (
    <div>
      {!doneLoading && !titleScreen && (
        <>
          <div>
            <md-circular-progress indeterminate></md-circular-progress>
          </div>
        </>
      )}
      {doneLoading && !titleScreen && (
        <>
          <div>Time: </div>
          <StopWatch />
          <div className="ButtonGroup">
            <md-filled-button
              onClick={() => {
                getNewSudoku();
              }}
            >
              New
            </md-filled-button>
          </div>
          <div className="Grid">
            {s.map((x) => (
              <div className="GridColumn">
                {x.map((y) => (
                  <Box data={y} />
                ))}
              </div>
            ))}
          </div>
          <div className="ButtonGroup">
            <md-filled-button>Check</md-filled-button>
          </div>
        </>
      )}
      {titleScreen && (
        <>
          <div className="Menu">
            <div>Sudoku</div>
            <md-filled-button onClick={newGame}>Play</md-filled-button>
          </div>
        </>
      )}
    </div>
  );
}
export default Sudoku;
