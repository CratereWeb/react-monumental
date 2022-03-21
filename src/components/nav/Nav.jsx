import NavLink from "../navLink/NavLink";

import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <NavLink to="https://www.wikipedia.org" text="Home" />
        <NavLink to="https://www.wikipedia.org" text="Style Demo" />
        <NavLink to="https://www.wikipedia.org" text="Full Width" />
        <NavLink to="https://www.wikipedia.org" text="Dropdown" />
        <NavLink to="https://www.wikipedia.org" text="Portfolio" />
        <NavLink to="https://www.wikipedia.org" text="Gallery" />
        <NavLink to="https://www.wikipedia.org" text="Long text link" />
      </ul>
    </nav>
  );
}
