import NavLink from "../navLink/NavLink";

import "./header.css";

export default function Header() {
  return (
    <header>
      <div id="title">
        <h1>
          <span>M</span>onumental
        </h1>
        <p>Free PSD Website Template</p>
      </div>
      <div id="login-search">
        <ul id="login">
          <NavLink to="https://www.wikipedia.org" text="Sign Up" />
          <span> | </span>
          <NavLink to="https://www.wikipedia.org" text="Login" />
          <span> | </span>
          <NavLink to="https://www.wikipedia.org" text="RSS Feed" />
        </ul>
        <div id="search-bar">
          <input type="text" name="search" id="search" />
          <i className="fas fa-search"></i>
        </div>
      </div>
    </header>
  );
}
