import { useState } from "react"

const SubirBajar = ({ SetValue }) => {
    const [num, setNum] = useState(0)
    return (
        <div>
            <button onClick={() => { setNum(num - 1); SetValue(num - 1) }}>-</button>
            <input type="number" value={num} />
            <button onClick={() => { setNum(num + 1); SetValue(num + 1) }}>+</button>
        </div>
    )
}

export default SubirBajar