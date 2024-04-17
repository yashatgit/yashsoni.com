"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export function NavLink({ href, name }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  //   const { asPath, pathname } = useRouter();
  console.log({ pathname, href, name });
  return (
    <Link href={href} className="p-1 sm:p-4 text-sm md:text-base ">
      {name}
    </Link>
  );
}
