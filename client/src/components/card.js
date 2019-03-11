import React from 'react'
import StarRatings from 'react-star-ratings';

export default props => {
  const { restaurant, onPressName } = props;
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
        <h3
          onClick={() => onPressName({
            lat: restaurant.coordinates.latitude,
            lng: restaurant.coordinates.longitude
          })}
        >
          {restaurant.name}
        </h3>
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