import {useRef, useState} from 'react';

export const useLockBodyScroll = () => {
  const [isLocked, setIsLocked] = useState(false);
  const bodyRef = useRef(document.body);

  const lockScroll = () => {
    bodyRef.current.style.overflow = 'hidden';
    setIsLocked(true);
  };

  const unlockScroll = () => {
    bodyRef.current.style.overflow = 'auto';
    setIsLocked(false);
  };
  return {isLocked, lockScroll, unlockScroll};
};
