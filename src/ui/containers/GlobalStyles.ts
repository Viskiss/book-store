import { createGlobalStyle } from 'styled-components';

type ThemeType = {
  color: {
    background: {
      page: string;
    };
  };
};

const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
body {
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Poppins', 'Roboto', 'Ubuntu',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${(props) => props.theme.color.background.page};
}

body, html {
  overflow-x: hidden
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

html, body, #root {
  height: 1px;
  min-height: 100%;
}

#root {
 display: flex;
 flex-direction: column;
}
`;

export default GlobalStyle;
