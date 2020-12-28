import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const InfoLeft = styled.div`
  width: 60%;
  .year {
    margin-right: 0.8rem;
  }
  .info-item {
    font-size: 1.2rem;
    font-weight: 500;
  }
  .overview {
    margin-top: 1rem;
    line-height: 1.5rem;
  }
`;

const InfoRight = styled.div`
  width: 30%;
  font-size: 0.9rem;

  .genres-wrapper {
    span {
      color: rgba(120, 120, 120, 1);
      margin-right: 0.3rem;
    }
  }
  .logos-wrapper {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .logo {
      max-width: 90px;
      height: auto;
      margin: 1rem;
    }
  }
`;

export { Block, InfoLeft, InfoRight };
