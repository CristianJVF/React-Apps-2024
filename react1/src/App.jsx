import { useRef } from "react"
import { useState } from "react"

const App = () => {
    const inputref = useRef()
    const [outputref, setContador] = useState(0)
    const Cambio = () => setContador(inputref.current.value * 2)


    const centigradosref = useRef()
    const [farenheitref, setCounter] = useState(0)
    const Convertir = () => setCounter(centigradosref.current.value * 9 / 5 + 32)

    const anchoref = useRef()
    const altoref = useRef()
    const supeficieref = useRef()

    const Calcular = () => {
        supeficieref.current.value = anchoref.current.value * altoref.current.value
    }

    return (
        <>
            <div>
                <input type="text" ref={inputref} />
                <button onClick={Cambio}>pulsar</button>
                <output >{outputref}</output>
            </div>
            <br />
            <div>
                <input type="text" ref={centigradosref} />
                <button onClick={Convertir}>convertir</button>
                <output >{farenheitref}</output>
            </div>
            <br />
            <div>
                <input type="text" ref={anchoref} />
                <input type="text" ref={altoref} />
                <button onClick={Calcular}>Calcular</button>
                <output ref={supeficieref}></output>
            </div>
        </>
    )
}

export default App
