import styled from 'styled-components';
import { fadeIn } from '../../../styles/animation';

// const DetailBlock = styled.div`
//   opacity: 0;
//   position: absolute;
//   bottom: 0.9rem;
//   left: 0;
//   padding: 2rem;
//   width: 100%;
//   height: 50%;
//   z-index: 13;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;

//   .title {
//     white-space: normal;
//   }
// `;

const PosterBlock = styled.div`
  position: relative;
  background: red;
  display: inline-block;

  .poster_img {
    height: 23rem;
  }
`;

const DetailWrapper = styled.div`
  position: absolute;
  opacity: 0;
`;
export { PosterBlock, DetailWrapper };
