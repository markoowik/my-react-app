import "./header.css";
import LogoImg from "./../../img/icons/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={LogoImg} alt="Logotype" />
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">Sobre mim</a>
              </li>
              <li>
                <a href="#!">Portfolio</a>
              </li>
              <li>
                <a href="#!">Skills</a>
              </li>
              <li>
                <a href="#!">Carreira</a>
              </li>
              <li>
                <a href="#!">Recomendações</a>
              </li>
              <li>
                <a href="#!">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
