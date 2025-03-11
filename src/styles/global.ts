import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme["base-background"]};;
        -webkit-font-smoothing: antialiased;
    }

    :focus{
        outline: 0;
    }

    body, input, textarea, button{
        font-family: "Nunito", sans-serif;
        color: ${({ theme }) => theme["base-text"]};
        font-weight: 400;
        font-size: 1rem;
    }
    

`;
