import logoImg from "../img/logo.jpg";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logoBox">
        <img className="nav__logoBox-img" src={logoImg} />
      </div>
      <a href="#header" className="nav__title">
        Welfare Massage
      </a>

      <a href="#treatments" className="nav__link">
        Treatments
      </a>
      <a href="#reviews" className="nav__link">
        Reviews
      </a>
      <a href="#contact" className="nav__link">
        Contact
      </a>
      <a href="#location" className="nav__link">
        Location
      </a>
    </nav>
  );
}

export default Nav;
