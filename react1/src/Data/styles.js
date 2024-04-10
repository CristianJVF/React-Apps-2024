import styled from 'styled-components';

const Box = styled.div`
width: 300px;
height: 300px;
background-color: ${({ color }) => color ? 'red' : 'green'};

h1 {
    background-color: black;
    color: green;
}




`
export default Box;