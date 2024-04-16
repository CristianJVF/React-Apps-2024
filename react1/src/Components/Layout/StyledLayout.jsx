import styled from 'styled-components';

export const Layoutdiv = styled.div`
nav {
    padding: 20px;
}
ul {
    display: flex;
    justify-content: space-between;
    border-bottom: 5px solid ;
}

li {
    list-style-type: none;
    padding: 10px;
}

a {
    text-decoration: none;
    border: 1px solid blue;
    border-radius: 5px;
    padding: 5px;
}

a:hover {
    background-color: aqua;
}

`