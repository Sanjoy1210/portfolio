import { LinkBtn } from '@/reusable/Buttons/Buttons';
import { useState } from 'react';
import { headerMenuData } from '../utils/menuData';

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <header className="sticky top-0 z-[1000]">
      <div className="container">
        <div className="flex justify-end pt-4">
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
      </div>
    </header>
  );
};

export default Header;
