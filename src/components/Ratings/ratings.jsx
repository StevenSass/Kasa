import StarRating from "../../images/StarRating.png"
import StarUnrating from "../../images/StarUnrating.png"

import React from 'react';

const Ratings = ({ratings}) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const starSrc = i <= ratings ? StarRating : StarUnrating;
    stars.push(<img key={"star" + i} src={starSrc} alt={"Ratings Numéro" + i} ></img>);
  }

  return ( 
    <div className="ratings">{stars}</div>
  )
  
};

export default Ratings;