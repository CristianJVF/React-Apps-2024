import styled from 'styled-components';

const Back = styled.div`
width: 300px;
height: 300px;
background-color: red;
display: ${({ visible }) => visible ? 'block' : 'none'};
position: absolute;
right: 10px;
top: 10px;
`

export default Back;