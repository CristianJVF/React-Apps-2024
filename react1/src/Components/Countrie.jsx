const container = {
    margin: "auto",
    width: "1200px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr"
}

const divStyle = {
    width: "300px"
}

const B = ({ countrieobj }) =>
    <div style={container}>
        <div style={divStyle}>
            <h1>{countrieobj.name}</h1>
            <h2>{countrieobj.capital}</h2>
            <h3>{countrieobj.country_code}</h3>
            <h4>{countrieobj.description}</h4>
        </div>
    </div>

export default B