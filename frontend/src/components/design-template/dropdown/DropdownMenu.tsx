import React, { FC, useState, useEffect, useRef } from 'react';
import MoreVerticalIcon from '@atlaskit/icon/glyph/more-vertical';
import Button from '@atlaskit/button';

interface DropdownMenuProps {
  children: React.ReactNode;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ children }) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent, elemento: any) => {
    if (
      elemento.current &&
      !elemento.current.contains(event.target)
    ) {
      setIsPressed(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', (evento: MouseEvent) => {
      handleClickOutside(evento, buttonRef);
    });
    return document.removeEventListener(
      'click',
      (evento: MouseEvent) => {
        handleClickOutside(evento, buttonRef);
      }
    );
  }, []);

  return (
    <span className="relative">
      <button
        type="button"
        ref={buttonRef}
        className="flex items-center justify-centerrounded-sm p-1 scale-[0.9] rounded-sm"
        onClick={() => setIsPressed((prevValue) => !prevValue)}
      >
        <MoreVerticalIcon
          label="mas"
          primaryColor={isPressed ? '#0c7aed' : '#44546f'}
        />
      </button>
      {isPressed && (
        <span className="flex flex-col gap-2 absolute right-0 mt-1 bg-white border border-solid border-gray-100 shadow-lg rounded text-left z-10 py-2 w-fit">
          {children}
        </span>
      )}
    </span>
  );
};

export default DropdownMenu;
