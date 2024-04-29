/*
References:
https://www.npmjs.com/package/next-app-theme
https://hangindev.com/blog/avoid-flash-of-default-theme-an-implementation-of-dark-mode-in-react-app

*/

"use client";
import React, { useEffect, useState, useCallback } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(typeof window === "undefined" ? "light" : window.__theme || "light");

  const toggleTheme = useCallback(() => {
    window?.__setPreferredTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  useEffect(() => {
    window.__onThemeChange = setTheme;
  }, []);

  return { theme, toggleTheme };
}

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
      onClick={toggleTheme}
    >
      {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          className="w-4 h-4 text-gray-800 dark:text-gray-200"
        >
          {isDarkMode ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </svg>
      }
    </button>
  );
};

export default ThemeToggle;
