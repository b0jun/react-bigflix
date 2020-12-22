import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const ContentsBlock = styled.div`
  min-height: 80vh;
  position: relative;
  top: -2.8rem;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

const GlobalStyles = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body{
    color: white;
    background: rgb(20, 20, 20);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }
`;

export default GlobalStyles;
