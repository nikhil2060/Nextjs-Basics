import SearchBar from "@/components/Clients/SearchBar";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <SearchBar />
    </nav>
  );
}

export default Header;
