import { useState } from "react"
import Questions from './ArrayTrivial.js'
import { Tarjeta } from './StyledTrivial.js'

const currentQuestion = 0
const q = Questions[currentQuestion]

const handleAnswer = (valor) => {
    if (valor) { currentQuestion++ }

}

const Trivial = () => {
    return (
        <Tarjeta>{
            <>
                <h2> {q.question}</h2>
                <div>
                    <p>
                        {(q.options).map((c, i) => <h4 key={i}><button onClick={() => handleAnswer(c.key)}>X</button>{c.answer}</h4>)}
                    </p>
                    <img src={q.img} alt="" />
                </div>
            </>
        }</Tarjeta>
    )
}

export default Trivial  