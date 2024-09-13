import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <header className="flex gap-4 justify-between p-4">
        <div className="flex gap-4">
          <Link href={"/"}>Rendezvous</Link>
          <nav>
            <Link href={"/features"}>Features</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
          </nav>
        </div>

        <nav>
          <Link href={"/features"}>Sign in</Link>
          <Link href={"/about"}>Get started</Link>
        </nav>
      </header>
    </main>
  );
}
