import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --fontSuperBig: 2.5rem;
        --white: #fff;
        --black: #000;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --orange: #FF5349;
        --bgrOrange: #e63e00;
        --green: #00ff45;
        --orangeRed: #ff4500;
    }
    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }
    body {
        margin: 0;
        padding: 0;
        background-color: var(--medGrey);

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p, span {
            font-size: 1rem;
            color: var(--white);
        }
    }

`;
