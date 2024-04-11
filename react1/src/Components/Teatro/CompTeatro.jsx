import { Libreto } from './StyledTeatro'
import LibretoArray from './Teatro.json'
import { useState } from "react"

const Teatro = () => {
    const [line, setLine] = useState(0)
    return (
        <>
            <div>
                <button onClick={() => setLine(line - 1)} >Anterior</button>
                <button>Siguiente</button>
            </div>
            <Libreto>{LibretoArray.map(e => <p>{e}</p>)}</Libreto>
        </>
    )
}

export default Teatro