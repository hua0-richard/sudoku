import React from "react";
import "./Box.css";
import Column from "./Column";

function Box({ data, s, sets }) {
  let k = data;
  return (
    <div className="Box">
      {k.map((u) => (
        <Column k={u} s={s} sets={sets} />
      ))}
    </div>
  );
}
export default Box;
