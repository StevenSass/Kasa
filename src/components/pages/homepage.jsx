import Location from "../Location/location"
import BannerImg  from "../BannerImg/bannerimg"
import image from "../../images/IMGpaysage.png"


function Homepage ({data}) {
    return (       
        <>
            <BannerImg images={image}/>
            
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
        </>
    )
}

export default Homepage