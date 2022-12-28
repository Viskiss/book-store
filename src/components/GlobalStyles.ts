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
  color:  #0D1821;
}

p {
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  line-height: 30px;
  color: #344966;
}

@media (max-width: 1024px) {

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color:  #0D1821;
  }

  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #344966;
  }
}

`;

export default GlobalStyle;
