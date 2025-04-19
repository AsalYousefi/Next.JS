"use client";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {

  const [navItems, setNavItems] = useState([
    {title: "home", isActive: true },
    {title: "destination", isActive: false },
    {title: "crew", isActive: false },
    {title: "technology", isActive: false },
  ]);

  return (
    <header className="header position-relative py-xl-4 w-100 d-flex align-items-center justify-content-between">
      <Link href="/" className="m-5">
        <Image src="/Subtract.svg" priority alt="logo" width={40} height={40} />
      </Link>
      <div className="line position-absolute d-none d-xl-block"></div>
      <BurgerMenu navItems={navItems} />
      <Navbar navItems={navItems} />
    </header>
  );
}
