import React from 'react'
import './Box.css'
import Row from './Row'

function genMatrix() {
    let data = [];
    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            let item = { id: i.toString() + ' ' + j.toString() }
            row.push(item);
        }
        data.push(row);
    }
    return data; 
}

function Box() {
    let k = genMatrix();
    return(
        <div className="Box">
            {k.map((u) => (
                <Row k={u} /> 
            ))}
        </div>
    )
}
export default Box