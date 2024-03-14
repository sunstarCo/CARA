import React, {useEffect, useRef, useState} from 'react';

function Dropdown({children, openStatus, position}) {
  const [isOpen, setIsOpen] = useState(openStatus);

  const dropBackgroundRef = useRef(null);

  useEffect(() => {
    const handleOutSideClose = event => {
      if (isOpen && !dropBackgroundRef.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('click', handleOutSideClose);
    return () => document.removeEventListener('click', handleOutSideClose);
  }, [isOpen]);

  return (
    <div ref={dropBackgroundRef} className={`absolute flex flex-col items-center bg-white ${position}`}>
      {isOpen || (openStatus && children)}
    </div>
  );
}

export default Dropdown;
