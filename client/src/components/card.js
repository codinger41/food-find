import React from 'react'
import StarRatings from 'react-star-ratings';

export default props => {
  const { restaurant } = props;
  return (
    <div className="card">
      <div className="card--image">
        <img src={restaurant.image_url}/>
      </div>
      <div className="card--content">
        <div className="card--category">{restaurant.is_closed ? 'Closed' : 'Open'}</div>
        <h3>{restaurant.alias}</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab incidunt aliquam cumque accusantium.</p>
      </div>
      <StarRatings 
        rating={restaurant.rating}
        starDimension="20px"
        starSpacing="5px"
      />
    </div>
  )
}