import Location from "../../Location/location"
import BannerImg  from "../../BannerImg/bannerimg"
import image from "../../../images/IMGpaysage.png"


function Homepage ({data}) {
    return (       
        <div className="wrapper">
            <BannerImg
                images={image}
            >
                <h1 className="bannerImg__text">Chez vous, partout et ailleurs</h1>
            </BannerImg>
            
            <div className="locationSection">
                {data.map((location) => (
                    
                    <Location
                        key={location.id}
                        id={location.id}
                        cover={location.cover}
                        title={location.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Homepage