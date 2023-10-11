import { useState } from "react";
import LeftArrow from "../../images/arrow_back_ios-24px 1Left.png"
import RightArrow from "../../images/arrow_forward_ios-24px 1Right.png"

function Carousel({image}) {
    const [count, setCount] = useState(0);
    if (count > image.length - 1) {
        setCount(0)
    }if (count < 0) {
        setCount(image.length - 1)
    }
    return (
        <div className="carousel">
            <img className="carousel__imgBack" src={image[count]} alt="Images de fond du carousel" />
            <img onClick={() => setCount(count - 1) } className="carousel__arrow carousel__arrow--left" src={LeftArrow} alt="Left Arrow" />
            <img onClick={() => setCount(count + 1) } className="carousel__arrow carousel__arrow--right" src={RightArrow} alt="Right Arrow" />
            <p className="carousel__text">{count + 1}/{image.length}</p>
        </div>
    )
}

export default Carousel