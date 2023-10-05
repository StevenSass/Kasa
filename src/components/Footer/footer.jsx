import WhiteLogo from "../../images/LOGOBlack.png"

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__img" src={WhiteLogo} alt="Logo Blanc"/>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer