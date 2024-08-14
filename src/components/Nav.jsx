import logoImg from "../img/logo.jpg";
function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={logoImg} />
      </div>
      <div className="nav__title">Welfare Massage</div>
      <div className="nav__link">Welcome</div>
      <div className="nav__link">Treatments</div>
      <div className="nav__link">revi</div>
      <div className="nav__link">Welcome</div>
    </nav>
  );
}

export default Nav;
