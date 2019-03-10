import React from 'react'
import StarRatings from 'react-star-ratings';

export default props => {
  const { restaurant } = props;
  return (
    <div className="card">
      <div className="card--image">
        <a href={restaurant.url}>
          <img
            src={restaurant.image_url}
          />
        </a>
      </div>
      <div className="card--content">
        <div className="card--category">{restaurant.is_closed ? 'Closed' : 'Open'}</div>
        <h3>{restaurant.name}</h3>
        <p>{restaurant.alias}</p>
      </div>
      <StarRatings 
        rating={restaurant.rating}
        starDimension="20px"
        starSpacing="5px"
      />
    </div>
  )
}