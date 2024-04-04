import {useEffect, useRef, useState} from 'react';

export function useObserver() {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const checkScroll = () => {
      const rect = domRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
        window.removeEventListener('scroll', checkScroll);
      }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll();

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return {isVisible, domRef};
}
