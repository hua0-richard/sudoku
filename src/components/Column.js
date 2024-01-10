import React, { useEffect, useState } from "react";
import { isValid, flattenSudoku, copyIntoSudoku } from "../util";
import "./Column.css";

function Column({ k, s, sets }) {
  const r = {
    height: "7vh",
    width: "7vh",
  };
  const t = {
    height: "7vw",
    width: "7vw",
  };
  const [val, setVal] = useState(r);
  const [inputClass, setInputClass] = useState("input")

  function input(m, e) {
    let temp = flattenSudoku(s);
    temp[m.r][m.c] = e;
    let result = copyIntoSudoku(temp, s);
    sets(result);
  }

  return (
    <div>
      {k.map((m) =>
        m.input === false ? (
          <div className="box" style={val}>
            {m.value}
          </div>
        ) : (
          <div className="box" style={val}>
            <input
              className={inputClass}
              onChange={(e) => {
                input(m, parseInt(e.target.value));
              }}
            />
          </div>
        ),
      )}
    </div>
  );
}

export default Column;
