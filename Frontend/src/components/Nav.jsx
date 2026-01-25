import logoImg from "../img/logo.jpg";
//nothing

function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav__logoBox">
        <img
          className="nav__logoBox-img"
          src={logoImg}
          alt="Welfare Massage Centre logo - Professional massage therapy in Ashford"
          width="50"
          height="50"
        />
      </div>
      <a href="#header" className="nav__title" aria-label="Go to homepage">
        Welfare Massage
      </a>

      <a
        href="#treatments"
        className="nav__link"
        aria-label="View massage treatments"
      >
        Treatments
      </a>
      <a
        href="#reviews"
        className="nav__link"
        aria-label="Read customer reviews"
      >
        Reviews
      </a>
      <a href="#contact" className="nav__link" aria-label="Contact us">
        Contact
      </a>
      <a href="#location" className="nav__link" aria-label="Find our location">
        Location
      </a>
    </nav>
  );
}

export default Nav;
