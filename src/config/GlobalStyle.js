import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{padding: 0; 
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    }
    body{
        width: 100%;
        min-height: 100vh;
        background-color: rgb(211, 216, 218);
    }
`;
