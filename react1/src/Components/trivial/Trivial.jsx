import { useState } from "react"
import Questions from './ArrayTrivial.js'
import { Tarjeta } from './StyledTrivial.js'
import { shuffleArray } from "../../utils/shuffleArray.js";


const Trivial = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const q = Questions[currentQuestion]

    const handleAnswer = (valor) => {
        if (valor) {
            setCurrentQuestion(currentQuestion === Questions.length - 1 ? Questions.length - 1 : currentQuestion + 1);
        }
    }
    return (
        <Tarjeta>{
            <>
                <h2> {q.question}</h2>
                <div>
                    <p>
                        {shuffleArray((q.options)).map((c, i) => <h4><button onClick={() => handleAnswer(c.key)}>X</button>{c.answer}</h4>)}
                    </p>
                    <img src={q.img} alt="" />
                </div>
            </>
        }</Tarjeta>
    )
}

export default Trivial  