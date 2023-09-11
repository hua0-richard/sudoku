import React from 'react'
import './Row.css'

function Row({k}) {
    return (
        <div>
            {k.map((m) => (
                <div className="box">
                    {m.id}
                </div>
            ))}
        </div>
    )
}

export default Row