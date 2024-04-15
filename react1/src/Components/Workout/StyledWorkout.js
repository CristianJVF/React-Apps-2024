import styled from 'styled-components';

export const Workouts = styled.div`
margin: auto;
width   : 1200px ;

h1 {
    display: inline-block;
    margin: 10px;
}

.sgte {
    rotate: 180deg;
}

.imagenes {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

& > div {
    display: flex;
}

.BigImg {
    height: 600px;
    width: auto;
}

.imagenes img {
width: 300px;
height: auto;
}
`

export const Img = styled.img`
border: ${({ $highlight }) => $highlight ? "2px solid red" : "6px solid transparent"};
border-radius: 5px
`   