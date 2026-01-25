function Header() {
  return (
    <header className="header" id="header" role="banner">
      <div className="header__img">
        <div className="header__Box">
          <h1 className="header__Box-title">
            Welcome to Welfare Massage Centre
          </h1>
          <p className="header__Box-subtitle">
            Specialising in Hot Stone Massage, EFT, Swedish Massage &
            Reflexology in Ashford, Kent
          </p>
          <div
            className="header__Btn"
            role="navigation"
            aria-label="Quick actions"
          >
            <a
              href="https://www.fresha.com/a/welfare-massage-centre-ashford-59-high-street-lk5oiedp/all-offer?menu=true&pId=123299"
              className="header__Btn-BookNow"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Book massage appointment online"
            >
              Book Now
            </a>
            <a
              href="#contact"
              className="header__Btn-Contact"
              aria-label="Go to contact information section"
            >
              Contact us
            </a>
          </div>
        </div>
        <div className="curved-container" aria-hidden="true"></div>
      </div>
    </header>
  );
}

export default Header;
