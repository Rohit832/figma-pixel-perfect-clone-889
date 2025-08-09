import React, { useState } from 'react';

interface CallToActionButtonProps {
  onClick?: () => void;
}

export const CallToActionButton: React.FC<CallToActionButtonProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action - could open a modal, navigate, etc.
      window.open('mailto:contact@finsage.com?subject=Learn More About Finsage', '_blank');
    }
  };

  return (
    <button
      className={`
        flex w-[348px] h-[49px] flex-col items-start gap-2.5 border shadow-[3px_4px_0_0_#000] absolute cursor-pointer bg-[#FFE149] px-[18px] py-2 rounded-[5px] border-solid border-black left-[681px] top-[748px] max-md:w-[280px] max-md:-translate-x-2/4 max-md:left-2/4 max-md:top-[1200px] max-sm:w-[250px] max-sm:top-[1000px]
        transition-all duration-150 ease-in-out
        hover:bg-[#FFD700] hover:shadow-[2px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px]
        active:shadow-[1px_1px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px]
        focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
        ${isPressed ? 'shadow-[1px_1px_0_0_#000] translate-x-[2px] translate-y-[2px]' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={handleClick}
      aria-label="Learn more about Finsage financial wellness solutions"
      type="button"
    >
      <div className="flex h-[33px] items-center gap-[15px] relative">
        <div className="flex w-[303px] h-[39px] flex-col justify-center text-black text-center text-2xl font-bold tracking-[0.96px] uppercase relative max-sm:text-lg max-sm:w-full">
          LEARN MORE ABOUT US
        </div>
      </div>
    </button>
  );
};
