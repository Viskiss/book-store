import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Poppins', 'Roboto', 'Ubuntu',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: white;
}
body, html {
  overflow-x: hidden
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

html, body, #root {
  height: 100%;
}

#root {
 display: flex;
 flex-direction: column;
}

.container {
  display: flex;
  justify-content: center;
}

`;

export default GlobalStyle;
