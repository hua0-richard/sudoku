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
  const [subcol, setSubcol] = useState(k);

  function input(m, e) {
    let temp = subcol;
    subcol[subcol.indexOf(m)].value = e;
    setSubcol(temp);
  }

  const column = (
    <div>
      {subcol.map((m) =>
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
      {subcol.map((m) => m.value === meta.solution[m.r][m.c] ? (
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
