import styled, { createGlobalStyle } from 'styled-components';
import monospace from '../app/monospace.ttf'

const desktopStartWidth = 996;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;

export const GlobalStyles = createGlobalStyle`
body{ 
    margin: 0;
    padding: 0;
    @font-face {
        font-family: myFont;
        src: url(${monospace});
    }
}

p {
    border-radius: 5px
}

input {
    border: 1px solid aqua;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
}

input:hover {
    background-color: azure;
}

button {
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    background-color: aliceblue;
    border: 1px solid aqua;
}

button:hover {
    background-color: aquamarine;
}
`