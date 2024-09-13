import Link from "next/link";
import { ReplaceAll } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="flex gap-4 justify-between py-6 text-gray-600">
      <div className="flex gap-12 items-center">
        <Link
          href={"/"}
          className="text-blue-600 font-bold text-2xl flex gap-2 items-center"
        >
          <ReplaceAll size={32} />
          Rendezvous
        </Link>
        <nav className="flex gap-4">
          <Link href={"/features"}>Features</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/pricing"}>Pricing</Link>
        </nav>
      </div>

      <nav className="flex items-center gap-4">
        <Link href={"/features"}>Sign in</Link>
        <Link
          href={"/about"}
          className="bg-blue-600 text-white py-2 px-4 rounded-full"
        >
          Get started
        </Link>
      </nav>
    </header>
  );
};

export default Header;
