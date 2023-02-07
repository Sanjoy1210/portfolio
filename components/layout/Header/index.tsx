import { LinkBtn } from '@/reusable/Buttons/Buttons';
import { useState } from 'react';
import { headerMenuData } from '../utils/menuData';
import MobileMenu from './MenuElements/MobileMenu';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <header className="sticky top-0 z-[1000]">
      <div className="container">
        <div className="flex justify-between pt-4">
          <div>Logo</div>
          <div className="flex">
            <div className="md:flex justify-end hidden">
              {headerMenuData?.map((item) => (
                <LinkBtn
                  key={item?.id}
                  href={item.href}
                  text={item.text}
                  IconBase={item.icon}
                  active={active}
                />
              ))}
            </div>
            <div className="justify-end">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
