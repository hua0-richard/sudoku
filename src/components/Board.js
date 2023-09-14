import React from "react";
import "./Board.css";

import Box from "./Box";

function genMatrix() {
  const data = [];
  for (let i = 0; i < 3; i++) {
    let temp = { id: i };
    data.push(temp);
  }
  return data;
}

function Board() {
  const m = genMatrix();
  return (
    <div>
      <div className="Grid">
        {m.map((item) => (
          <div className="GridColumn">
            {m.map((item) => (
              <Box />
            ))}
          </div>
        ))}
      </div>
      <div className="ButtonGroup">
        <div className="Button">Random</div>
        <div className="Button">Check</div>
        <div className="Button">Solve</div>
      </div>
    </div>
  );
}
export default Board;
