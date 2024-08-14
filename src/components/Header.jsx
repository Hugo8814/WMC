import headerImg from "../img/header.jpg";
function Header() {
  return (
    <div className="header">
      <img className="header__img" src={headerImg} alt="" />
    </div>
  );
}

export default Header;
