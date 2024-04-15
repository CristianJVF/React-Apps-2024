import { useState } from "react"
import { Container } from "./StyledCuento"
import scenes from "./scenes"
// import { Door } from './StyledCuento'



const CompCuento = () => {
    const getSceneByName = name => scenes.find(obj => obj.title == name)
    const [currentScene, setCurrentScene] = useState(getSceneByName('espacio'));

    return (
        <Container>
            <p>{currentScene.txt}</p>
            <img src={currentScene.back} alt="#" />
            {/* <Door>  </Door> */}
        </Container>
    )
}

export default CompCuento