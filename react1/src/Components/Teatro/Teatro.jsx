import { useState } from "react"
import LibretoArray from './Teatro.json'
import { P } from './StyledTeatro'
import { Link } from 'react-router-dom';

const Teatro = () => {
    const [line, setLine] = useState(0)
    return (
        <>
            <div>
                <button onClick={() => setLine(line - 1)} >Anterior</button>
                <button onClick={() => setLine(line + 1)} >Siguiente</button>
            </div>
            {
                LibretoArray.map((e, i) => <P lineposition={i == line} >{e}</P>)
            }
        </>
    )
}

export default Teatro