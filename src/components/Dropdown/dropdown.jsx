import Arrow from "../../images/arrow_back_ios-24px 2.png"

function Dropdown() {
    return (
        <div className="dropdown">
            <div className="dropdown__hotbar">
                <p className="dropdown__hotbar__title">Equipement</p>
                <img className="dropdown__hotbar__button" src={Arrow} alt="" />
            </div>
            <div className="dropdown__info">
                <ul className="dropdown__info__list">
                    <li>Climatisation</li>
                    <li>Wi-Fi</li>
                    <li>Cuisine</li>
                    <li>Espace de travail</li>
                    <li>Fer à repasser</li>
                    <li>Sèche-cheveux</li>
                    <li>Cintres</li>
                </ul>
            </div>
        </div>
    )
}

export default Dropdown