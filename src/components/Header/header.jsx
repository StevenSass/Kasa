import { Link } from "react-router-dom"
import Logo from "../../images/LOGO.png"

function Header() {
    return (
        <section className="header">
            <Link className="header__logo" to="/"><img src={Logo} alt="logo.png" className="header__logo"></img></Link>
            <div className="header__link">
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </div>
        </section>
    )
}

export default Header