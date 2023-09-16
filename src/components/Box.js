import React from "react";
import "./Box.css";
import Column from "./Column";

function boxData() {
  let box = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
        let item = { id: i.toString() + " " + j.toString(), input:  true};
        row.push(item);
    }
    box.push(row);
  }
  return box;
}

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
