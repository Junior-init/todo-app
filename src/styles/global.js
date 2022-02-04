import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html{
        @media (min-width: 1080px) {
            font-size: 93.75%
        }
        @media (min-width: 780px) {
            font-size: 87.5%
        }
    }

    body,input,textarea,button{
        font-family: 'roboto', sans-serif;
        font-weight: 400;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: pointer;
    }

`

export default GlobalStyle;