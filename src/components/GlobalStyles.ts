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

h1 {
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
}

p {
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  line-height: 30px;
}

@media (max-width: 834px) {
  
  h1 {
  /* font-family: 'Poppins';
  font-weight: 700;
  font-size: 40px;
  line-height: 60px; */
}

p {
  font-size: 16px;
line-height: 24px;
}
  }

`;

export default GlobalStyle;
