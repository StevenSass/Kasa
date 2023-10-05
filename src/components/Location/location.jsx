function Location({ title, cover}) {
    return (
        <a href="">
            <article className="locationSection__article">
                <div className="locationSection__article__overlay"></div>
                <img className="locationSection__article__picture" src={cover} alt="" /> 
                <h2 className="locationSection__article__title">
                    {title}
                </h2>
                
            </article> 
        </a>
    )
}

export default Location