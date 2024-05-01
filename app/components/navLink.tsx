"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export function NavLink({ href, name }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const currentFullPath = `${pathname || ""}${category ? `?category=${category}` : ""}`;
  const isActivePath = currentFullPath === href;

  return (
    <Link
      href={href}
      className={`p-1 sm:p-4 text-sm md:text-base ${isActivePath ? "text-blue-500 dark:text-blue-400" : ""}`}
    >
      {name}
    </Link>
  );
}
