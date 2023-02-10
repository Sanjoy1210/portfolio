import { headerMenuData } from '@/layout/utils/menuData';
import LinkBtn from '@/reusable/LinkBtn';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

interface IMobileMenu {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  isDropdown: boolean;
}

const variants = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: {
    y: 5,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1,
      type: 'spring',
      stiffness: 120,
    },
  },
};

const MobileMenu = ({ active, setActive, isDropdown }: IMobileMenu) => {
  const router = useRouter();

  return (
    <>
      <AnimatePresence>
        {isDropdown ? (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="block lg:hidden  absolute left-0 rounded-b-[20px] top-[74px] z-[22222222222222] w-full bg-white dark:bg-[#212425] drop-shadow-lg py-4 "
          >
            {headerMenuData?.map((menu) => (
              <LinkBtn
                key={menu?.id}
                href={menu.href}
                text={menu.text}
                IconBase={menu.icon}
                active={active}
                onClick={() => setActive(false)}
                isActiveMenu={router?.pathname === menu?.href}
              />
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
