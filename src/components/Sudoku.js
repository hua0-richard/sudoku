import React, { useState } from "react";
import { FaGear } from "react-icons/fa6";
import "./Sudoku.css";
import Box from "./Box";
import StopWatch from "./StopWatch";
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
                  <Box data={y} s={s} sets={sets}/>
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
            <md-filled-button
              onClick={() => {
                console.log(s);
              }}
            >
              Verify
            </md-filled-button>
            <FaGear />
          </div>
        </>
      )}
      // title screen
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
