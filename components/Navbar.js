
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link href="/">
        <h1 className="font-bold text-xl">Movie Search App</h1>
      </Link>
      <Link href="/favorites">
        <button className="bg-white text-blue-600 px-3 py-1 rounded">
          Favorites
        </button>
      </Link>
    </nav>
  );
}
