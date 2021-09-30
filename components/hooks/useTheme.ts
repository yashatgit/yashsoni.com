import { useTheme as baseUseTheme } from 'next-themes';
import { lightTheme, darkTheme } from 'styles/theme';

const useTheme = () => {
  const { resolvedTheme, setTheme, ...rest } = baseUseTheme();
  const isDarkMode = resolvedTheme === 'dark';
  return {
    ...rest,
    resolvedTheme,
    setTheme,
    themeObj: isDarkMode ? darkTheme : lightTheme,
    isDarkMode
  };
};

export { useTheme };
