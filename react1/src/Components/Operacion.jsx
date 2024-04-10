import { useState } from "react"
import images from "../Data/imagenes"
const objStyle = {
    backgroundColor: "salmon",
}


const Operacion = ({ SetOperacion }) => {
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    return (
        <div style={objStyle}>
            <input type="text" onChange={e => setNum1(e.target.value)} />
            <input type="text" onChange={e => setNum2(e.target.value)} />
            <button onClick={() => SetOperacion(num1 * num2)}>calcular</button>
            <img src={images[0].img} />
        </div>
    )
}
export default Operacion