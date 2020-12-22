import styled from 'styled-components';

const FooterBlock = styled.div`
  text-align: center;
  padding: 3rem 0;
  p span {
    font-weight: bold;
    color: #e74c3c;
  }
`;

const LinkBlock = styled.div`
  margin-bottom: 1rem;
  a:first-child {
    margin-right: 0.3rem;
  }
  a:last-child {
    margin-left: 0.3rem;
  }
`;

export { FooterBlock, LinkBlock };
