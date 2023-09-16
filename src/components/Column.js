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
  const handleResize = () => {
    if (window.innerWidth > window.innerHeight) {
      setVal(r);
    } else {
      setVal(t);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {k.map((m) =>
        m.input ? (
          <div className="box" style={val}>
            {m.id}
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
