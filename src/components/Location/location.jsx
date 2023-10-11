import { Link } from "react-router-dom"

function Location({title, cover, id}) {
    return (
        <Link to={"/logement/" + id}>
            <div className="locationSectiondiv">
                <article className="locationSection__article">
                    <div className="locationSection__article__overlay"></div>
                    <img className="locationSection__article__picture" src={cover} alt="" /> 
                    <h2 className="locationSection__article__title">
                        {title}
                    </h2>
                    
                </article> 
            </div>
        </Link>
    )
}

export default Location