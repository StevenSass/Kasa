import { useState } from "react"
import Arrow from "../../images/arrow_back_ios-24px 2.png"



function Dropdown({title, text}) {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <div className="dropdown--div">
            <div className="dropdown__hotbar">
                <p className="dropdown__hotbar__title">{title}</p>
                <img onClick={toggle} className={!open ? "dropdown__hotbar__button" : "dropdown__hotbar__button--rotate"} src={Arrow} alt="" />
            </div>
            {open && <div className={!open ? "dropdown__info--close" : "dropdown__info"}>
                <ul className="dropdown__info__list">
                    <li>{text}</li>
                </ul>
            </div>}
        </div>
    )
}

export default Dropdown