import React, { useEffect, useState } from "react";

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


  function nothing() {
    console.log(s)
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
            <input className="input" onChange={() => {nothing()}}/>
          </div>
        ),
      )}
    </div>
  );
}

export default Column;
