import React, { useEffect, useState } from "react";
import {isValid, flattenSudoku, copyIntoSudoku} from "../util"
import "./Column.css";

function Column({ k, s, sets}) {
  const r = {
    height: "7vh",
    width: "7vh",
  };
  const t = {
    height: "7vw",
    width: "7vw",
  };
  const [val, setVal] = useState(r);


  function nothing(m, e) {
    let temp = flattenSudoku(s);
    temp[m.c][m.r] = e;
    let result = copyIntoSudoku(temp, s)
    sets(result); 
    if(isValid(flattenSudoku(s), m.r, m.c, e)) {

    } else {
      
    }
  }

  return (
    <div>
      {k.map((m) =>
        m.value != 0 ? (
          <div className="box" style={val}>
            {m.value}
          </div>
        ) : (
          <div className="box" style={val}>
            <input className="input" onChange={(e) => {nothing(m, parseInt(e.target.value))}}/>
          </div>
        ),
      )}
    </div>
  );
}

export default Column;
