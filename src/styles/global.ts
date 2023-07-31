import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    &:focus{
        outline: 0;
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};;
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
    }

    *::-webkit-scrollbar {
        width: 5px; 
    }

    *::-webkit-scrollbar-track {
        background: ${(props) => props.theme['base-hovered']}
    }

    *::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.yellow};
        border-radius: 5px;     
    }
    


`
