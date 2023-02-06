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
      className="w-8 h-8 p-1 ml-1 mr-1 rounded-full sm:ml-4"
      onClick={() =>
        setTheme(
          theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark'
        )
      }
    >
      <span className="text-gray-900 dark:text-gray-100">
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <RiSunLine />
        ) : (
          <RiMoonLine />
        )}
      </span>
    </button>
  );
};

export default ThemeSwitcher;
