import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/Common/GlobalStyles';
import RootRouter from './routes/Router';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RootRouter />
    </ThemeProvider>
  );
};

export default App;
