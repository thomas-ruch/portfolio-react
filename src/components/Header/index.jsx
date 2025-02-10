import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <p>TR</p>
      </NavLink>
      <nav>
        <NavLink
          to="#"
          onClick={() =>
            document
              .getElementById("home-title")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="#"
          onClick={() =>
            document
              .getElementById("home-gallery")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Projets
        </NavLink>
        <NavLink
          to="#h"
          onClick={() =>
            document
              .getElementById("home-about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
