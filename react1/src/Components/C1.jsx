import { useState } from "react"
let num = 0

const SubirBajar = ({ SetValue }) => {
    return (
        <div>
            <button onClick={() => { SetValue(num -= 1) }}>-</button>
            <input type="number" onchange={e => SetValue(e)} />
            <button onClick={() => { SetValue(num += 1) }}>+</button>
        </div>
    )
}

export default SubirBajar