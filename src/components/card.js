import React from 'react'

export default props => {
  return (
    <div className="card">
      <div className="card--image">
        <img src="https://source.unsplash.com/500x301"/>
      </div>
      <div className="card--content">
        <div className="card--category">Category</div>
        <h3>Card 1 Title</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab incidunt aliquam cumque accusantium.</p>
      </div>
    </div>
  )
}