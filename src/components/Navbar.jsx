"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray 800 text-white">
      <ul className=" flex justify-end space-x-4 p-4">
        {pathname !== "/" && (
          <li>
            <Link href={"/"}>Home</Link>
          </li>
        )}
        {pathname !== "/about" && (
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
