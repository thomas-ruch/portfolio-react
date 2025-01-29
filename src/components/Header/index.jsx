import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <h1>Thomas Ruch</h1>
      </NavLink>
      <nav>
        <NavLink to="/#home-gallery">Travaux</NavLink>
        <NavLink to="/#home-about">A propos</NavLink>
        <NavLink to="/#home-contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
