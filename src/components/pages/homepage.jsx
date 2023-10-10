import Location from "../Location/location"
import BannerImg  from "../BannerImg/bannerimg"

function Homepage (data) {
    const donnee = data.i

    return (
        <>
            <BannerImg />
            
            <div className="locationSection">
                {donnee.map((location) => (
                    <Location
                        key={location.id}
                        cover={location.cover}
                        title={location.title}
                    />
                ))}
            </div>
        </>
    )
}

export default Homepage