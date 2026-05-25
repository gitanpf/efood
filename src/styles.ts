import { createGlobalStyle } from 'styled-components'

const cores = {
  fontBody: '#E66767',
  backgroundCard: '#FFFFFF',
  backgroundHome: '#FFF8F2'
}

export const GlobalCSS = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  
  body {
    color: ${cores.fontBody};
    background-color: ${cores.backgroundHome};
  }
}
`
