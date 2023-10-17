
function BannerImg({images, children}) {
    return (
        <div className="bannerImg">
            <img src={images} alt="paysage.png" className="bannerImg__image"></img>
            {children}
        </div>
    )
}

export default BannerImg