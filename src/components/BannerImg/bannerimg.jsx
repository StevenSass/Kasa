

function BannerImg({images, text}) {
    return (
        <div className="bannerImg">
            <img src={images} alt="paysage.png" className="bannerImg__image"></img>
            <h1 className="bannerImg__text">{text}</h1>
        </div>
    )
}

export default BannerImg