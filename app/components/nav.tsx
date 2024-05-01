import React from "react";
import dynamic from "next/dynamic";

import { NavLink } from "./navLink";

// Don't SSR the toggle since the value on the server will be different than the client
const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
  // Make sure to code a placeholder so the UI doesn't jump when the component loads
  loading: () => <div className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800" />,
});

const navItems = {
  "/": {
    name: "Home",
  },
  "/blog?category=blog": {
    name: "Writing",
  },
  "/blog?category=til": {
    name: "TIL",
  },
  "/about": {
    name: "About",
  },
};

export function Navbar() {
  return (
    <aside className="mb-2 md:mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative mt-5 md:mt-20"
          id="nav"
        >
          <div className="flex items-center justify-between w-full">
            <ThemeToggle />
            <div className="flex flex-row space-x-2 md:space-x-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                return <NavLink key={name} href={path} name={name} />;
              })}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
