import { useState } from "react"
import Box from "../../Data/styles"
import { BoxDiv, HeredadoP } from './StyledComponents1';
import { CompP } from './StyledComponents2'

const CompBox = () => {
    const [color, setColor] = useState()
    return (
        <Box color={color}>
            <h1>hola que tal</h1>
            <BoxDiv>titulo <br /> <br />
                <CompP>Lorem ipsum dolor, sit amet consectetur <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sint.</CompP>
                <HeredadoP>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quasi.
                </HeredadoP>
            </BoxDiv>
        </Box>
    )
}

export default CompBox