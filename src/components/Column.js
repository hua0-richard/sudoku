import React, { useEffect, useState } from "react";
import "./Column.css";

function Column({ k }) {
  const r = {
    height: "7vh",
    width: "7vh",
  };
  const t = {
    height: "7vw",
    width: "7vw",
  };
  const [val, setVal] = useState(r);


  return (
    <div>
      {k.map((m) =>
        m.value != 0 ? (
          <div className="box" style={val}>
            {m.value}
          </div>
        ) : (
          <div className="box" style={val}>
            <input className="input"></input>
          </div>
        ),
      )}
    </div>
  );
}

export default Column;
