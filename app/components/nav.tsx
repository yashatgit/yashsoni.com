import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
//import { useRouter } from "next/router";

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
  const isDarkMode = true;
  //const { asPath, pathname } = useRouter();
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex items-center justify-between w-full">
            <ThemeToggle />
            <div className="flex flex-row space-x-0 pr-10">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link key={path} href={path} className="p-1 sm:p-4 text-sm md:text-base ">
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}

// text-blue-500 dark:text-blue-400
