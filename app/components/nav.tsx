import ThemeToggle from "./ThemeToggle";
import { NavLink } from "./navLink";
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
  //const { asPath, pathname } = useRouter();
  return (
    <aside className="mb-2 md:mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative mt-5 md:mt-20"
          id="nav"
        >
          <div className="flex items-center justify-between w-full">
            <ThemeToggle />
            <div className="flex flex-row space-x-0">
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

// text-blue-500 dark:text-blue-400
