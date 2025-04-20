"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BurgerMenu(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="d-md-none">
      <div className="pointer text-end mx-4" onClick={() => setIsOpen((prev) => !prev)}>
        <Image src="/icon-hamburger.svg" width={30} height={30} priority alt="menu-icon" />
      </div>
      {isOpen && (
        <div className="menu position-absolute top-0 end-0 py-4 h-full">
          <div className="pointer mb-5 w-100 text-end me-5 pe-3" onClick={() => setIsOpen(false)}>
            <Image src="/icon-close.svg" width={30} height={30} priority alt="close-icon" />
          </div>
          <div className="w-100">
            <ul className="d-flex flex-column w-100">
              {props.navItems.map((item, index) => {
                return (
                  <li key={index} className={`w-100 py-1 my-3 ${item.isActive && "active"}`}>
                    <Link href={`/${item.title}`} className="text-uppercase text-white fw-light">
                      <span className="fw-bold me-3">{`0${index}`}</span>
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
