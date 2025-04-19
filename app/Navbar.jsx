import Link from "next/link";

export default function Navbar(props) {
  return (
    <nav className="d-none d-md-block h-100">
      <ul className="d-flex justify-content-around align-items-center h-100">
        {props.navItems.map((item, index) => {
          return (
            <li
              key={index}
              className={`h-100 pt-xl-3 ${item.isActive && "active"}`}
            >
              <Link
                href={`/${item.title}`}
                className="text-uppercase text-white fw-light"
              >
                <span className="fw-bold me-3">{`0${index}`}</span>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
