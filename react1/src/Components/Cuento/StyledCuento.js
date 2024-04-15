import styled from 'styled-components';

export const Container = styled.div`
width: 1200px;
height: auto;
margin: auto;  

img {
width: 100%;
}

p {
    width: 70%;
    position: absolute;
    background-color: bisque;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
}
`

// export const Door = styled.div`
//     position: absolute;
//     left: ${({ data }) => data.x}%;
//     top: ${({ data }) => data.y}%;
//     width: ${({ data }) => data.width}%;
//     height: ${({ data }) => data.height}%;
//     border: 1px solid red;
//     cursor: pointer;
// `