import {useEffect, useRef, useState} from 'react';

export function useObserver() {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const checkScroll = () => {
      if (domRef.current) {
        const rect = domRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight / 1.5 && rect.bottom >= 0) {
          setIsVisible(true);
          window.removeEventListener('scroll', checkScroll);
        }
      }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll();

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return {isVisible, domRef};
}
