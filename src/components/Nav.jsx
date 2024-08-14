import logoImg from "../img/logo.jpg";
function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logoBox">
        <img className="nav__logoBox-img" src={logoImg} />
      </div>
      <div className="nav__title">Welfare Massage</div>
      <div className="nav__link-pink">Welcome</div>
      <div className="nav__link">Treatments</div>
      <div className="nav__link">Reviews</div>
      <div className="nav__link">Contact</div>
    </nav>
  );
}

export default Nav;
