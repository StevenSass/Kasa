import { Link } from "react-router-dom"

function Error() {
    return (
        <article className="error">
            <div className="error__section">
                <h1 className="error__section__title">404</h1>
            </div>
            <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>

            <Link to="/" className="error__link">Retourner sur la page d’accueil</Link>
        </article>
    )
}

export default Error