import { useCallback, useEffect, useState } from 'react';

const useYScroll = () => {
  const [state, setState] = useState({
    y: 0,
    direction: 1,
  });
  const onScroll = useCallback(
    (e) => {
      window.__scrollPosition = document.documentElement.scrollTop || 0;
      setState({
        y: window.scrollY,
        direction: state.y - window.__scrollPosition >= 0 ? 1 : -1,
      });
    },
    [state.y]
  );

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);
  return state;
};

export default useYScroll;
