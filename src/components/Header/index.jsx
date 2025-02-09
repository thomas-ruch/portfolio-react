import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <h1>Thomas Ruch</h1>
      </NavLink>
      <nav>
        <NavLink
          to="#"
          onClick={() =>
            document
              .getElementById("home-gallery")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Projets.
        </NavLink>
        <NavLink
          to="#h"
          onClick={() =>
            document
              .getElementById("home-about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          A propos.
        </NavLink>
        <NavLink
          to="#"
          onClick={() =>
            document
              .getElementById("home-contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact.
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
