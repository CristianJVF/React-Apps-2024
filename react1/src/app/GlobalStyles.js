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
    background-color: bisque;
}

p {
    border-radius: 5px;
    
}

`