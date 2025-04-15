import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  return (
    <header className="p-3 d-flex align-items-center justify-content-between">
      <Link href="/">
        <Image src="/Subtract.svg" alt="logo" width={50} height={50} />
      </Link>
      <BurgerMenu />
    </header>
  );
}
