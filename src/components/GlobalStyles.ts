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
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyle;
