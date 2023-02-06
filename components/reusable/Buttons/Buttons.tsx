import Link from 'next/link';
import { useRef } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { IconType } from 'react-icons/lib';
import { useClickAnimation } from '../../../hooks/useClickAnimation';

interface IButtonProps {
  text: string;
  active: boolean;
}

interface IMenuLinkProps extends IButtonProps {
  href: string;
  IconBase: IconType;
}

export const PrimaryBtn = ({
  text = 'Primary Btn',
  active = false,
}: IButtonProps) => {
  const buttonRef = useRef(null);
  useClickAnimation(buttonRef, { size: 100, color: '#fff', duration: 800 });

  return (
    <button
      className={`${
        active ? 'bg-gradient-to-r text-white' : 'bg-white text-[#44566c]'
      } rounded-md cursor-pointer font-medium mx-2.5 flex text-[.8125rem] py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] dark:text-white hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] linked`}
      ref={buttonRef}
    >
      <span className="mr-2 text-xl">
        <AiOutlineHome />
      </span>
      {text}
    </button>
  );
};

export const LinkBtn = ({
  text = 'Link Btn',
  active = false,
  href,
  IconBase,
}: IMenuLinkProps) => {
  const linkButtonRef = useRef(null);
  useClickAnimation(linkButtonRef, { size: 100, color: '#fff', duration: 800 });

  return (
    <Link
      href={href}
      className={`${
        active ? 'bg-gradient-to-r text-white' : 'bg-white text-[#44566c]'
      } rounded-md cursor-pointer font-medium mx-2.5 flex text-[.8125rem] py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] dark:text-white hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] linked`}
      ref={linkButtonRef}
    >
      <span className="mr-2 text-xl">
        <IconBase />
      </span>
      {text}
    </Link>
  );
};
