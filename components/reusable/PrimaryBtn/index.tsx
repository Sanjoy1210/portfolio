import { useRef } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { useClickAnimation } from '../../../hooks/useClickAnimation';

interface IPrimaryBtnProps {
  text: string;
  active: boolean;
}

const PrimaryBtn = ({
  text = 'Primary Btn',
  active = false,
}: IPrimaryBtnProps) => {
  const buttonRef = useRef(null);
  useClickAnimation(buttonRef, { size: 100, color: '#fff', duration: 800 });

  return (
    <button
      className={`${
        active ? 'bg-gradient-to-r text-white' : 'bg-white text-light-gray-1'
      } rounded-md cursor-pointer font-medium mx-2.5 flex text-[.8125rem] py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-dark dark:text-white hover:text-white hover:bg-gradient-to-r from-light to-light-1 linked`}
      ref={buttonRef}
    >
      <span className="mr-2 text-xl">
        <AiOutlineHome />
      </span>
      {text}
    </button>
  );
};

export default PrimaryBtn;
