import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="bg-white w-[40px] hover:text-white h-[40px] rounded-full flex justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 linked"
      onClick={() =>
        setTheme(
          theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark'
        )
      }
    >
      <span className="text-2xl">
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <RiSunLine className={`${mounted ? 'animate-spinRays' : ''}`} />
        ) : (
          <RiMoonLine />
        )}
      </span>
    </button>
  );
};

export default ThemeSwitcher;
