
const divStyle = {
    width: "200px",
    height: "auto"
}


const B = ({ countrieobj }) => {
    return (
        <div style={divStyle}>
            <h1>{countrieobj.name}</h1>
            <h2>{countrieobj.capital}</h2>
            <h3>{countrieobj.country_code}</h3>
            <h4>{countrieobj.description}</h4>
        </div>
    )
}


export default B