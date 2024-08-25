function Header() {
  
  return (
    <div className="header" id="header">
      <div className="header__img">
        <div className="header__Box">
          <h1 className="header__Box-title">
            Welcome to Welcome Massage Centre
          </h1>
          <h2 className="header__Box-subtitle">
            Specialising in hotStone massage, EFT, Swedish Massage & Reflexology
          </h2>
          <div className="header__Btn">
            <a
              href="https://www.fresha.com/a/welfare-massage-centre-ashford-59-high-street-lk5oiedp/booking?menu=true"
              className="header__Btn-BookNow"
            >
              Book Now
            </a>
            <a href="#contact" className="header__Btn-Contact ">
              Contact us
            </a>
          </div>
        </div>
        <div className="curved-container"></div>
      </div>
    </div>
  );
}

export default Header;
