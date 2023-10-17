import BannerImg from "../../BannerImg/bannerimg"
import Dropdown from "../../Dropdown/dropdown"
import Image from "../../../images/Image source 2.png"

function About({dataAbout}) {   
    return (
        <div>
            <BannerImg
                key={"bannerImg - 4986"}
                images={Image}
                
            />
            <div className="margin-dropdown">
                <div className="dropdown ">
                    {dataAbout.map((dropdown) => (
                        <Dropdown
                            key={dropdown.id + "DropDown"}
                            text={dropdown.text}
                            title={dropdown.title}
                        />
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default About