import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store/configureStore';
import { theme } from './styles/theme';
import GlobalStyles from './components/Common/GlobalStyles';
import RootRouter from './routes/Router';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RootRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
