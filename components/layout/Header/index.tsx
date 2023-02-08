import { LinkBtn } from '@/reusable/Buttons/Buttons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { headerMenuData } from '../utils/menuData';
import Dropdown from './MenuElements/Dropdown';
import MobileMenu from './MenuElements/MobileMenu';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  const [active, setActive] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <div className="container">
      <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1500]">
        <div className=" flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent lg:dark:bg-transparent dark:bg-black ">
          <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5 ">
            <Link href="/" className="text-5xl font-semibold">
              <Image
                src="/images/logo.png"
                priority
                alt="logo"
                width={153}
                height={26}
              />
            </Link>
            <div className="flex lg:hidden">
              <ThemeSwitcher />
              <Dropdown isDropdown={isDropdown} setIsDropdown={setIsDropdown} />
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="flex">
            {headerMenuData?.map((item) => (
              <LinkBtn
                key={item?.id}
                href={item.href}
                text={item.text}
                IconBase={item.icon}
                active={active}
              />
            ))}
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      <MobileMenu
        active={active}
        setActive={setActive}
        isDropdown={isDropdown}
      />
      {/* <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1500]">
        <div className="flex justify-between bg-[#F3F6F6] lg:bg-transparent">
          <div className="flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent lg:dark:bg-transparent dark:bg-black">
            <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5 ">
              <Link href="/" className="text-5xl font-semibold">
                <Image
                  src="/images/logo.png"
                  priority
                  alt="logo"
                  width={153}
                  height={26}
                />
              </Link>
              <div className="flex lg:hidden">
                <ThemeSwitcher />
                <Dropdown
                  isDropdown={isDropdown}
                  setIsDropdown={setIsDropdown}
                />
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
            <div className="flex">
              {headerMenuData?.map((item) => (
                <LinkBtn
                  key={item?.id}
                  href={item.href}
                  text={item.text}
                  IconBase={item.icon}
                  active={active}
                />
              ))}
              <ThemeSwitcher />
            </div>
          </div>
        </div>
        {isDropdown ? (
          <MobileMenu active={active} setActive={setActive} />
        ) : null}
      </header> */}
    </div>
  );
};

export default Header;
