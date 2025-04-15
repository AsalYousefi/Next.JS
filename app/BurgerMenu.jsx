"use client";
import Link from "next/link";
import { useState } from "react";

export default function BurgerMenu() {
  const [navItems, setNavItems] = useState([
    { id: 1, title: "home", isActive: true },
    { id: 2, title: "destination", isActive: false },
    { id: 3, title: "crew", isActive: false },
    { id: 4, title: "technology", isActive: false },
  ]);
  return (
    <nav className="navbar-expand-sm navbar">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#burgermenu"
          aria-controls="burgermenu"
          aria-expanded="false"
          aria-label="burgermenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="burgermenu">
          <div className="navbar-nav">
            {navItems.map((item) => {
                <Link href={`/${item.title}`} className={item.isActive && "active"}>{`0${item.id} ${item.title}`}</Link>
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
