import React from "react";
import "./Box.css";
import Column from "./Column";

function Box({ data, s, sets, meta, setMeta }) {
  const k = data;
  return (
    <div className="Box">
      {k.map((u) => (
        <Column k={u} s={s} sets={sets} meta={meta} setMeta={setMeta} />
      ))}
    </div>
  );
}
export default Box;
