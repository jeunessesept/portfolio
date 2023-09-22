'use client'

import React from 'react'
import Link from 'next/link'

const NavHome = () => {
  return (
    <nav className="bg-gray 800 text-slate-400">
    <ul className=" flex justify-end space-x-4 p-4">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
    </ul>
  </nav>
  )
}

export default NavHome