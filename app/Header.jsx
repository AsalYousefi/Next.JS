import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="container">
                <Link href="/"><Image src="/Subtract.svg" alt="logo" width={50} height={50} /></Link>
            </div>
        </header>
    )
}