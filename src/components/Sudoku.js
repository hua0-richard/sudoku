import React, { useState } from "react";
import { FaGear } from "react-icons/fa6";
import "./Sudoku.css";
import Box from "./Box";
import StopWatch from "./StopWatch";
import { flattenSudoku, copyIntoSudoku } from "../util";

function Sudoku() {
  const [titleScreen, setTitleScreen] = useState(true);
  const [doneLoading, setLoading] = useState(false);
  const [s, sets] = useState(sudokuData());
  const [solution, setSolution] = useState(null);

  function newGame(difficulty) {
    getNewSudoku(difficulty);
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

  function getNewSudoku(difficulty) {
    setLoading(false);
    setTitleScreen(false);
    fetch("http://localhost:3001/sudoku/" + difficulty)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.result);
        let puzzle = copyIntoSudoku(data.result, s);
        sets(puzzle);
        setLoading(true);
      });
  }

  function getSudokuSolution() {
    setLoading(false);
    setTitleScreen(false);
    fetch("http://localhost:3001/solution", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify(flattenSudoku(s)),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let temp = copyIntoSudoku(data.result, s);
        sets(temp);
        setLoading(true);
      });
  }

  return (
    <div>
      {!doneLoading && !titleScreen && (
        <>
          <md-circular-progress indeterminate></md-circular-progress>
        </>
      )}
      {doneLoading && !titleScreen && (
        <>
          <div>Time: </div>
          <StopWatch />
          <div className="ButtonGroup">
            <md-filled-button
              onClick={() => {
                getNewSudoku("medium");
              }}
            >
              New
            </md-filled-button>
          </div>
          <div className="Grid">
            {s.map((x) => (
              <div className="GridColumn">
                {x.map((y) => (
                  <Box data={y} s={s} sets={sets} />
                ))}
              </div>
            ))}
          </div>
          <div className="ButtonGroup">
            <md-filled-button
              onClick={() => {
                getSudokuSolution();
              }}
            >
              Check
            </md-filled-button>
            <FaGear />
          </div>
        </>
      )}
      {titleScreen && (
        <>
          <div className="Menu">
            <div>Sudoku</div>
            <md-filled-button
              class="Standard-Button"
              onClick={() => {
                newGame("easy");
              }}
            >
              Easy
            </md-filled-button>
            <md-filled-button
              class="Standard-Button"
              onClick={() => {
                newGame("medium");
              }}
            >
              Medium
            </md-filled-button>
            <md-filled-button
              class="Standard-Button"
              onClick={() => {
                newGame("hard");
              }}
            >
              Hard
            </md-filled-button>
            <md-outlined-button class="Standard-Button">
              Login
            </md-outlined-button>
          </div>
        </>
      )}
    </div>
  );
}
export default Sudoku;
