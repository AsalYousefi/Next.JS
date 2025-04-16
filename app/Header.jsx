import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  return (
    <header className="position-relative p-3 w-100 d-flex align-items-center justify-content-between">
      <Link href="/">
        <Image src="/Subtract.svg" priority alt="logo" width={50} height={50} />
      </Link>
      <BurgerMenu />
    </header>
  );
}
