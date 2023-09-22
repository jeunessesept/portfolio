'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray 800 text-slate-400">
      <ul className=" flex justify-end space-x-4 p-4">
        {pathname !== "/" && (
          <li>
            <Link href={"/"}>Home</Link>
          </li>
        )}
        {pathname !== "/resume" && (
          <li className="text-lg ease-in-out hover:scale-110">
            <Link href={"/resume"}> Resume</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
