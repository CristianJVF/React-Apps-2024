import styled from 'styled-components';

export const P = styled.p`
background-color: ${({ lineposition }) => lineposition ? 'pink' : 'transparent'};
`