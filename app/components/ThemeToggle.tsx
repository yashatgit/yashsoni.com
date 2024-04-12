"use client";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = window.localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme; // Use saved theme if available
      } else {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; // Default to system preference
      }
    }
    return "light"; // Default theme if window is not available
  });
  const isDarkMode = theme === "dark";

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add(theme);
    html.classList.remove(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme); // Save the current theme to local storage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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
