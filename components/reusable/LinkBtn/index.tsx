import { useClickAnimation } from 'hooks/useClickAnimation';
import Link from 'next/link';
import { useRef } from 'react';
import { IconType } from 'react-icons/lib';

interface ILinkBtnProps {
  text: string;
  active: boolean;
  href: string;
  IconBase: IconType;
  onClick?: () => void;
  isActiveMenu?: boolean;
}

const LinkBtn = ({
  text = 'Link Btn',
  active = false,
  href,
  IconBase,
  onClick,
  isActiveMenu,
}: ILinkBtnProps) => {
  const linkButtonRef = useRef(null);
  useClickAnimation(linkButtonRef, { size: 100, color: '#fff', duration: 800 });

  return (
    <Link
      href={href}
      className={`${
        active || isActiveMenu
          ? 'bg-gradient-to-r !text-white'
          : 'bg-white text-light-gray-1'
      } px-2 rounded-md  cursor-pointer font-poppins bg-white font-medium mx-2.5 flex text-[.8125rem] py-2.5 lg:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-dark hover:text-white hover:bg-gradient-to-r from-light to-light-1 dark:text-light-gray `}
      ref={linkButtonRef}
      onClick={onClick}
    >
      <span className="mr-2 text-xl">
        <IconBase />
      </span>
      {text}
    </Link>
  );
};

export default LinkBtn;
