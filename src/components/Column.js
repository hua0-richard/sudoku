import React, { useEffect, useState } from "react";
import { isValid, flattenSudoku, copyIntoSudoku } from "../util";
import "./Column.css";

function Column({ k, s, sets, meta, setMeta }) {
  const r = {
    height: "7vh",
    width: "7vh",
  };
  const t = {
    height: "7vw",
    width: "7vw",
  };
  const [val, setVal] = useState(r);

  function slowFind(m, e, sudoku) {
    let s_prime = sudoku;
    s_prime.forEach((t) => {
      t.forEach((u) => {
        u.forEach((v) => {
          v.forEach((w) => {
            if (w.r === m.r && w.c === m.c) {
              // modify
              w.value = e;
              sets(s_prime)
              return; 
            }
          });
        });
      });
    });
  }

  function input(m, e) {
    slowFind(m, e, s);
    console.log(s);
  }

  const column = (
    <div>
      {k.map((m) =>
        m.input === false ? (
          <div className="box" style={val}>
            {m.value}
          </div>
        ) : (
          <div className="box" style={val}>
            <input
              className="input"
              onChange={(e) => {
                input(m, parseInt(e.target.value));
              }}
            />
          </div>
        )
      )}
    </div>
  );

  const columnSolution = (
    <div>
      {k.map((m) => m.value === meta.solution[m.r][m.c] ? (
          <div className="correctBox" style={val}>
            {m.value}
          </div>
      ) : (
        <div>
          <div className="diffbox" style={val}>{meta.solution[m.r][m.c]}</div>
        </div>
      ))}
    </div>
  );

  return meta.mode === "player" ? column : columnSolution;
}

export default Column;
