import React from "react";

export const PageHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="mb-8">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">{title}</h3>
      {subtitle && <div className="mb-6 text-sm md:text-base">{subtitle}</div>}
    </div>
  );
};
