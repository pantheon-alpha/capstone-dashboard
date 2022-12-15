import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;    }
        background-color: ${p=> p.theme.primaryBg};
    section {
    }
`

export default GlobalStyles