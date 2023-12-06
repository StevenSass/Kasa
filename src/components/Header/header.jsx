import { Link } from "react-router-dom";
import Logo from "../../images/LOGO.png";

function Header() {
  return (
    <div className="wrapper">
      <section className="header">
        <Link className="header__logo" to="/Projet-8/">
          <img src={Logo} alt="logo.png" className="header__logo"></img>
        </Link>
        <div className="header__link">
          <Link to="/Projet-8/">Accueil</Link>
          <Link to="/Projet-8/about">A Propos</Link>
        </div>
      </section>
    </div>
  );
}

export default Header;
