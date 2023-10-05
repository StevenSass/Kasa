import Location from "./location"

function LocationFunction(data) {
    const donnee = data.i
    
   
    return (
        <div className="locationSection">
            {donnee.map((location) => (
                <Location
                    key={location.id}
                    cover={location.cover}
                    title={location.title}
                />
            ))}
        </div>
    )
}

export default LocationFunction