import { Link } from "react-router-dom"
import Logo from "../../images/LOGO.png"

function Header() {
    return (
        <section className="header">
            <img src={Logo} alt="logo.png" className="header__logo"></img>
            <div className="header__link">
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </div>
        </section>
    )
}

export default Header