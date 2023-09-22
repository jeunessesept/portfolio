"use client";

import Link from "next/link";
import React from "react";

export const LinkButton = ({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={url}
      className="w-20 p-5 mx-2 mt-4 relative flex h-full items-center justify-center rounded-full shadow duration-300 ease-in-out hover:scale-110 l bg-slate-600 hover:bg-slate-700"
    >
      {children}
    </Link>
  );
};
