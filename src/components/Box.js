import React from "react";
import "./Box.css";
import Column from "./Column";

function genMatrix() {
  let data = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
        let temp = false;
        let item = { id: i.toString() + " " + j.toString(), input:  temp};
        row.push(item);
    }
    data.push(row);
  }
  return data;
}

function Box() {
  console.log(window.innerWidth);
  let k = genMatrix();
  return (
    <div className="Box">
      {k.map((u) => (
        <Column k={u} />
      ))}
    </div>
  );
}
export default Box;
