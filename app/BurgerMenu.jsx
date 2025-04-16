"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BurgerMenu() {
  const [navItems, setNavItems] = useState([
    { id: 1, title: "home", isActive: true },
    { id: 2, title: "destination", isActive: false },
    { id: 3, title: "crew", isActive: false },
    { id: 4, title: "technology", isActive: false },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="d-md-non">
      <div className="pointer text-end" onClick={() => setIsOpen((prev) => !prev)}>
        <Image src="/icon-hamburger.svg" width={30} height={30} priority alt="menu-icon" />
      </div>
      {isOpen && (
        <div className="menu position-absolute top-0 end-0 py-4 h-full">
          <div className="pointer mb-5 w-100 text-end me-5 pe-3" onClick={() => setIsOpen(false)}>
            <Image src="/icon-close.svg" width={30} height={30} priority alt="close-icon" />
          </div>
          <div className="w-100">
            <ul className="d-flex flex-column w-100">
              {navItems.map((item) => {
                return (
                  <li key={item.id} className={`w-100 py-1 my-3 ${item.isActive && "active"}`}>
                    <Link href={`/${item.title}`} className="text-uppercase text-white fw-light">
                      <span className="fw-bold me-3">{`0${item.id}`}</span>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
