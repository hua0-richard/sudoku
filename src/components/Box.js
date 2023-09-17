import React from "react";
import "./Box.css";
import Column from "./Column";

function Box({data}) {
  let k = data;
  return (
    <div className="Box">
      {k.map((u) => (
        <Column k={u} />
      ))}
    </div>
  );
}
export default Box;
