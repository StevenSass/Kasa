import {useParams } from "react-router-dom";
import data from "../../../datas/annonce.json"
import Carousel from "../../Carousel/carousel";
import Dropdown from "../../Dropdown/dropdown";
import Tags from "../../Tags/tags"
import Profile from "../../Profile/profile";
import Ratings from "../../Ratings/ratings";

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function Logement () {
    const {id} = useParams();
    const idData = data.find((element) => element.id === id)
    return (
        <div className="logement">
            <Carousel
                key={Math.random()}
                image={idData.pictures}
            />
            <div className="gridContainer">
                <div className="gridItemInfo">
                    <h2 className="logement__title">{idData.title}</h2>
                    <p className="logement__text">{idData.location}</p>

                    <ul key={Math.random()} className="logement__tagList">
                        {idData.tags.map((tagsList) => 
                            <Tags
                            key={Math.random()}
                            Text={tagsList}
                            />
                        )}
                    </ul>
                </div>
                <div className="gridItemProfile">
                    <Profile
                        key={id + "Profile"}
                        profileName={idData.host.name}
                        profilePhoto={idData.host.picture}
                    />
                </div>
                <div className="gridItemRating">
                    <Ratings
                        key={id + "Rating"}
                        ratings={idData.rating}
                    />
                </div>
            </div>
            <div className="dropdownSection">
                <Dropdown 
                    key={id + "Description"}
                    text={idData.description}
                    title="Description"
                />
                <Dropdown 
                    key={id + "Equipement"}
                    text={idData.equipments}
                    title="Equipement"
                />
            </div>
            
        </div>
    )
}

export default Logement