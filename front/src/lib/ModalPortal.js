import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';

const ModalStyle = styled.div`
  z-index: 1000;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalPortal = ({ children }) => {
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);
  const el = document.getElementById('modal_root');
  return createPortal(<ModalStyle>{children}</ModalStyle>, el);
};

export default ModalPortal;
