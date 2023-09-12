import React, { useEffect, useState } from 'react'
import './Row.css'

function Row({k}) {
    const r = {
        height: '10vh',
        width: '10vh'
    }
    const t = {
        height: '10vw',
        width: '10vw'
    }
    const [val, setVal] = useState(r);
    const handleResize = () => {
        if (window.innerWidth > window.innerHeight) {
            setVal(r)
        } else {
            setVal(t)
        }
        
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
            return () => {
            window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div>
            {k.map((m) => 
            (         
                m.input ? 
                <div className="box" style = {val}>
                    {m.id}
                </div> : 
                <input className="box" style={val}></input>
            ))}
        </div>
    )
}

export default Row