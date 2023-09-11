import React from 'react'
import './Board.css';

import Box from './Box'

function genMatrix() {
    const data = [];
    for (let i = 0; i < 9; i++) {
        let temp = {id: i}
        data.push(temp)
    }
    return data;
}

function Board() {
    const m = genMatrix();
    return (
        <div className='Grid'>
            {m.map((item) => (
                <Box />
            ))}
        </div>
    );
}
export default Board