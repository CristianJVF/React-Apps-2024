import { GekoDiv } from './StyledGeko'
import { useEffect, useState } from "react"
import { getData } from "../../app/api";

const CompGeko = () => {
    // const [array, setArray] = useState([])

    // fetch('https://rickandmortyapi.com/api/character')
    //     .then(response => response.json())
    //     .then(data => setArray(data.results))

    const [d, setD] = useState([]);
    const [v, setV] = useState(1);

    useEffect(() => {
        getData()
            .then(data => setD(data.data.results))
    }, [v])

    return (
        <GekoDiv>
            {/* {array.map(e => <h2>{e.name}</h2>)} */}

            <div>
                <button onClick={() => setV(v + 1)}>Pulsar</button>
                {v}
                <h4></h4></div>
        </GekoDiv>
    )
}

export default CompGeko