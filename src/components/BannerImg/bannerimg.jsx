import Images from "../../images/IMGpaysage.png"

function BannerImg() {
    return (
        <div className="bannerImg">
            <img src={Images} alt="paysage.png" className="bannerImg__image"></img>
            <h1 className="bannerImg__text">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default BannerImg