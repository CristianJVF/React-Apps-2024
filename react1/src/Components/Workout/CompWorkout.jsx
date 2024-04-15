import { useState } from "react"
import { Workouts } from "./StyledWorkout.js"
import { Img } from "./StyledWorkout.js"
import ArrayWorkouts from "./workouts.js"
import Flecha from "../../assets/imgWorkout/flecha.png"


const CompWorkout = () => {
    const [BigImage, setBigImage] = useState(0)
    const [NumWorkout, setNumWorkout] = useState(0)
    const array = ArrayWorkouts[NumWorkout]

    return (

        <Workouts><img src={Flecha} alt="#" onClick={() => NumWorkout !== 0 && setNumWorkout(NumWorkout - 1)} /><h1>{array.title}</h1><img src={Flecha} alt="#" className="sgte" onClick={() => NumWorkout !== ArrayWorkouts.length - 1 && setNumWorkout(NumWorkout + 1)} />
            <div>
                <img src={array.exercises[BigImage].img} alt="" className="BigImg" />
                <div className="imagenes">  {(array.exercises).map((e, i) => (
                    <Img
                        key={i + NumWorkout + e.img}
                        src={e.img} alt="#"
                        onClick={() => setBigImage(i)}
                        $highlight={i === BigImage} />))}

                </div>


            </div>
        </Workouts>

    )
}

export default CompWorkout