import { useState, useEffect } from "react"
import { CountriesDiv } from "./StyledCountries";
import array from "./Countries.json"

const Countries = () => {


    return (
        < CountriesDiv >
            <div>{array[0].name}
            </div>
        </CountriesDiv >
    )
}

export default Countries