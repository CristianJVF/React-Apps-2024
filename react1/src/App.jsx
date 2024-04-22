import { useRef } from "react"
import { useState } from "react"
import Router from './app/Router';
// import Pintar from "./components/Pintar";
import SubirBajar from "./components/C1";
import { } from "module";

import Popup from "./components/Popup";
import { GlobalStyles } from "./app/GlobalStyles";


const images = {
    img1: "http://via.placeholder.com/111x111",
    img2: "http://via.placeholder.com/222x222",
    img3: "http://via.placeholder.com/333x333",
};

const App = () => {
    const [inputref, setContador] = useState()
    const [centigradosref, setCentigrados] = useState()
    const [farenheitref, setCounter] = useState(0)
    const anchoref = useRef()
    const altoref = useRef()
    const supeficieref = useRef()
    const Calcular = () => {
        supeficieref.current.value = anchoref.current.value * altoref.current.value
    }
    const [withref, setwith] = useState()
    const [heigthref, setheigth] = useState()
    const [superficieref, setSuperficie] = useState()
    const [image, setImage] = useState(images.img1)
    const [op, SetOper] = useState()
    const [val, SetVal] = useState()

    const [visible, setVisible] = useState()

    return (
        <>
            <Router />
            <GlobalStyles />
            <button onClick={() => setVisible(!visible)}>Abrir/Cerrar</button>
            <Popup visible={visible} setVisible={setVisible} />
            <div>
                {/* Utilizando useState() para renderizar letra por letra el resultado en el output, no necesita boton ni guardar en una constante el resultado
                y recogemos el target.value del input no el current.value como con useRfe */}
                <input type="text" onChange={e => setContador(e.target.value * 2)} />
                <output >{inputref}</output>
            </div>
            <br />
            <div>
                {/* Utiliznado useRef() aqui si que necesitamos recoger el output para renderizar el resultado */}
                <input type="text" onChange={e => setCentigrados(e.target.value)} />
                <button onClick={() => setCounter(centigradosref * 9 / 5 + 32)}>convertir</button>
                <output >{farenheitref}</output>
            </div>
            <br />
            <div>
                <input type="text" ref={anchoref} />
                <input type="text" ref={altoref} />
                <button onClick={Calcular}>Calcular</button>
                <output ref={supeficieref}></output>
            </div>
            <br />
            <div>
                <input type="text" onChange={e => setwith(e.target.value)} />
                <input type="text" onChange={e => setheigth(e.target.value)} />
                <button onClick={() => setSuperficie(withref * heigthref)}>Superficie</button>
                <output>{superficieref}</output>
            </div>
            <br />
            <div>
                <button onClick={() => setImage(images.img1)}>Imagen1</button>
                <button onClick={() => setImage(images.img2)}>imagen2</button>
                <button onClick={() => setImage(images.img3)}>Imagen3</button>
                <br />
                <img src={image} alt="#" />
            </div>

            {/* <Pintar SetPintar={op} /> */}

            <SubirBajar SetValue={SetVal} />
            <div>{val}</div>

            {/* (!color) es igual a (color ? false : true) */}
            <button onClick={() => setColor(color ? false : true)}>Cambiar color</button>


        </>
    )
}

export default App 
