import { useState, useEffect } from 'react';
import { useTheme } from 'components/hooks/useTheme';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

const tabs = [
  { title: 'Home', href: '/' },
  { title: 'Writing', href: '/blog' },
  { title: 'TIL', href: '/til' },
  { title: 'About', href: '/about' }
];

export default function Container(props) {
  const { asPath } = useRouter();
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme, isDarkMode } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-navv md:my-8 dark:bg-black bg-opacity-60 dark:text-gray-100">
      <a
        href="#skip"
        className="skip-nav absolute px-4 py-2 transition-transform duration-200 transform -translate-y-12 left-1/4 focus:top-4 focus:translate-y-3 -top-8"
      >
        Skip to content
      </a>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
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
        )}
      </button>
      <div>
        {tabs.map((tab) => (
          <NextLink href={tab.href} key={tab.title}>
            <a
              className={`p-1 sm:p-4 text-sm md:text-base ${
                asPath === tab.href
                  ? 'text-blue-500 dark:text-blue-400'
                  : 'text-gray-900 dark:text-gray-100'
              }`}
            >
              {tab.title}
            </a>
          </NextLink>
        ))}
      </div>
    </nav>
  );
}
